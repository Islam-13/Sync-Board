import { api } from "@/convex/_generated/api";
import useApiMutation from "@/hooks/useApiMutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

function NewBoardButton({ orgId, disabled }: NewBoardButtonProps) {
  const { mutate, pending } = useApiMutation(api.board.create);
  const router = useRouter();

  function handleClick() {
    if (!orgId) return;

    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create!!"));
  }
  return (
    <button
      disabled={disabled || pending}
      onClick={handleClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col justify-center items-center text-white cursor-pointer",
        (pending || disabled) &&
          "opacity-75 cursor-not-allowed hover:bg-blue-600"
      )}
    >
      <Plus className="h-12 w-12 stroke-1" />

      <p className="text-xs font-light">New Board</p>
    </button>
  );
}

export default NewBoardButton;
