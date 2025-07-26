import { useQuery } from "convex/react";
import EmptyBoard from "./EmptyBoard";
import EmptyFavourites from "./EmptyFavourites";
import EmptySearch from "./EmptySearch";
import { api } from "@/convex/_generated/api";
import BoardCard from "./BoardCard";
import NewBoardButton from "./NewBoardButton";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

function BoardList({ orgId, query }: BoardListProps) {
  const data = useQuery(api.getBoards.get, { orgId, ...query });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favourite Boards" : "Team Boards"}
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 my-8">
          <NewBoardButton orgId={orgId} disabled />

          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </ul>
      </div>
    );
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavourites />;
  }

  if (!data.length) {
    return <EmptyBoard orgId={orgId} />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favourite Boards" : "Team Boards"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 my-8">
        <NewBoardButton orgId={orgId} />

        {data?.map((item) => (
          <BoardCard
            key={item._id}
            authorId={item.authorId}
            orgId={item.orgId}
            title={item.title}
            createdAt={item._creationTime}
            imageUrl={item.imageUrl}
            isFavorite={item.isFavorite}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardList;
