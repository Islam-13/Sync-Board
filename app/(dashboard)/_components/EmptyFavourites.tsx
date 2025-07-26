import Image from "next/image";

function EmptyFavourites() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-fav.svg"
        alt="Empty"
        width={140}
        height={140}
        priority
      />

      <h2 className="text-2xl font-semibold mt-6">No Favourite Boards!!</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Try Favouriting a Board...
      </p>
    </div>
  );
}

export default EmptyFavourites;
