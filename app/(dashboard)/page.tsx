"use client";

import { useOrganization } from "@clerk/nextjs";

import EmptyOrg from "./_components/EmptyOrg";
import BoardList from "./_components/BoardList";
import React from "react";

interface HomeProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const { organization } = useOrganization();

  const item = React.use(searchParams);

  return (
    <div className="flex-1 p-6 h-[calc(100%-80px)]">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={item} />
      )}
    </div>
  );
}
