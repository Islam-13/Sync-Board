"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import useApiMutation from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import ConfirmModal from "./ConfirmModal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/useRenameModal";

interface ActionsProps {
  children: React.ReactNode;
  id: string;
  title: string;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
}

function Actions({ children, id, title, side, sideOffset }: ActionsProps) {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  function onCopyLink() {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied successfully"))
      .catch(() => toast.error("Faild to copy link!!"));
  }

  function onDeleteBoard() {
    mutate({ id })
      .then(() => toast.success("Board deleted successfully"))
      .catch(() => toast.error("Faild to delete board!!"));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-60 "
        side={side}
        sideOffset={sideOffset}
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
          <Link2 />
          <span>Copy Board Link</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <Pencil />
          <span>Edit Board Title</span>
        </DropdownMenuItem>

        <ConfirmModal
          header="Delete Board?"
          description="This action is permenantly. It can not be undone."
          disabled={pending}
          onConfirm={onDeleteBoard}
        >
          <Button
            className="p-3 cursor-pointer w-full justify-start font-normal"
            variant="ghost"
          >
            <Trash2 />
            <span>Delete</span>
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Actions;
