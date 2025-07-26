"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import useApiMutation from "@/hooks/useApiMutation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface EmptyBoardProps {
  orgId: string;
}

function EmptyBoard({ orgId }: EmptyBoardProps) {
  const { mutate, pending } = useApiMutation(api.board.create);
  const router = useRouter();

  function handleClick() {
    if (!orgId) return;

    mutate({
      orgId,
      title: "test new board",
    })
      .then((id) => {
        toast.success("Board Created Successfully");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create!!"));
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-boards.svg"
        alt="Empty"
        width={110}
        height={110}
        priority
      />

      <h2 className="text-2xl font-semibold mt-6">
        Could Not Found Any Boards!!
      </h2>

      <p className="text-muted-foreground text-sm mt-2">
        Start By Creating a Board For Your Organization...
      </p>

      <div className="mt-6">
        <Button onClick={handleClick} size="lg" disabled={pending}>
          Create a new board
        </Button>
      </div>
    </div>
  );
}

export default EmptyBoard;
