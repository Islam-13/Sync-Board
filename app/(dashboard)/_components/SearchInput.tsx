import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import qs from "query-string";
import { useDebounce } from "@uidotdev/usehooks";

function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: { search: debouncedValue },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [router, debouncedValue]);
  return (
    <div className="w-full relative">
      <Search className="absolute w-4 h-4 left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />

      <Input
        className="w-[min(490px,100%)] ps-10 py-1"
        placeholder="Search Boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default SearchInput;
