import Image from "next/image";

function EmptySearch() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-search.svg"
        alt="Empty"
        width={200}
        height={200}
        priority
      />

      <h2 className="text-2xl font-semibold mt-6">No Results Found!!</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Try Searching For Something Else...
      </p>
    </div>
  );
}

export default EmptySearch;
