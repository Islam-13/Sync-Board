import { Room } from "@/components/Room";
import Canvas from "../_components/Canvas";

interface BoardIdPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

interface TitleProps {
  searchParams: Promise<{
    title: string;
  }>;
}

export async function generateMetadata({ searchParams }: TitleProps) {
  const { title } = await searchParams;

  return { title };
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
