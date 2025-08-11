"use client";

import { useOrganization } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

import EmptyOrg from "./_components/EmptyOrg";
import BoardList from "./_components/BoardList";

export default function Home() {
  const { organization } = useOrganization();
  const params = useSearchParams();

  const query = {
    search: params.get("search") ?? undefined,
    favorites: params.get("favorites") ?? undefined,
  };

  return (
    <div className="flex-1 p-6 h-[calc(100%-80px)]">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
}
