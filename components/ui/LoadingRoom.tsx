import { Loader } from "lucide-react";
import { Skeleton } from "./skeleton";

function LoadingRoom() {
  return (
    <div className="w-full h-full relative flex justify-center items-center bg-neutral-100">
      <Loader className="w-7 aspect-square text-muted-foreground animate-spin" />

      <div className="absolute top-2 left-2 shadow-md rounded-md h-12 w-[300px]">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="absolute top-2 right-2 shadow-md rounded-md h-12 w-24">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-2 shadow-md rounded-md h-96 w-[52px]">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
}

export default LoadingRoom;
