import { Room } from "@/components/Room";
import Canvas from "../_components/Canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

async function BoardIdPage({ params }: BoardIdPageProps) {
  const { boardId } = await params;

  return (
    <Room roomId={boardId}>
      <Canvas boardId={boardId} />
    </Room>
  );
}

export default BoardIdPage;
