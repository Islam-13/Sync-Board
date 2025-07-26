"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function OrgSidebar() {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <div className="hidden h-full lg:flex flex-col space-y-6 w-[230px] px-3 py-5">
      <Link href="/">
        <div className="flex items-center justify-center gap-2">
          <Image
            quality={100}
            src="/logo.svg"
            width={60}
            height={60}
            alt="Logo"
          />
          <span className="font-semibold text-2xl">Sync Board</span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              width: "100%",
            },
            organizationSwitcherTrigger: {
              border: "solid 1px #e5e7eb",
              width: "100%",
              padding: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          },
        }}
      />

      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className={`flex items-center gap-2 p-2 rounded-md border ${!favorites && "bg-[#e7e5eb]"}`}
        >
          <LayoutDashboard /> <span>Team boards</span>
        </Link>

        <Link
          href={{
            pathname: "/",
            query: { favorites: true },
          }}
          className={`flex items-center gap-2 p-2 rounded-md border ${favorites && "bg-[#e7e5eb]"}`}
        >
          <Star /> <span>Favourite boards</span>
        </Link>
      </div>
    </div>
  );
}

export default OrgSidebar;
