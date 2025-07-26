"use client";

import Actions from "@/components/Actions";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import useApiMutation from "@/hooks/useApiMutation";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  orgId: string;
  authorId: string;
  imageUrl: string;
  createdAt: number;
  isFavorite: boolean;
}

function BoardCard({
  id,
  title,
  orgId,
  authorId,
  createdAt,
  imageUrl,
  isFavorite,
}: BoardCardProps) {
  const { userId } = useAuth();
  const authorLabel = userId == authorId ? "You" : "test name";
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const { mutate: favorite, pending: favoritePend } = useApiMutation(
    api.board.favorite
  );
  const { mutate: unfavorite, pending: unfavoritePend } = useApiMutation(
    api.board.unfavorite
  );

  function toggleFavorite(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    e.preventDefault();

    if (isFavorite) {
      unfavorite({ id }).catch(() => toast.error("Failed to unfavourite"));
    } else {
      favorite({ id, orgId }).catch(() => toast.error("Failed to unfavourite"));
    }
  }

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="flex-1 relative bg-amber-50">
          <Image fill src={imageUrl} alt={title} className="object-cover" />

          <div className="h-full w-full opacity-0 group-hover:opacity-50 bg-black transition-opacity" />

          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-2 outline-none transition-opacity">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>

        <footer className="bg-white p-3 relative">
          <p className="text-sm truncate max-w-[calc(100%-21px)]">{title}</p>

          <p className="truncate text-muted-foreground text-xs">
            {authorLabel}, {createdAtLabel}
          </p>

          <button
            onClick={toggleFavorite}
            disabled={favoritePend || unfavoritePend}
            className={cn(
              "absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
              (favoritePend || unfavoritePend) &&
                "cursor-not-allowed opacity-75"
            )}
          >
            <Star className={cn("w-4 h-4", isFavorite && "fill-blue-600")} />
          </button>
        </footer>
      </div>
    </Link>
  );
}

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
