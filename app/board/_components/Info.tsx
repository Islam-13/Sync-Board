"use client";

import Hint from "@/app/(dashboard)/_components/Hint";
import Actions from "@/components/Actions";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/useRenameModal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}

function Info({ boardId }: InfoProps) {
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });
  const { onOpen } = useRenameModal();

  if (!data) return <div>loading....</div>;

  return (
    <div className="absolute top-2 left-2 bg-white shadow-md rounded-md p-3 flex items-center h-12">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Link
          href="/"
          className="flex gap-1 items-center hover:text-blue-800 hover:bg-blue-500/20 py-1.5 px-2 rounded-sm"
        >
          <Image src="/logo.svg" alt="Sync Board Logo" width={40} height={40} />

          <span className="font-semibold">Sync Board</span>
        </Link>
      </Hint>

      <div className="text-neutral-300 px-0.5">|</div>

      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button variant="board" onClick={() => onOpen(data?._id, data?.title)}>
          {data?.title}
        </Button>
      </Hint>

      <div className="text-neutral-300 px-0.5">|</div>

      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button variant="board" size="icon">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
}

export default Info;
