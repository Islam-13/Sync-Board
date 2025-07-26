"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import SearchInput from "./SearchInput";
import InviteButton from "./InviteButton";

function Navbar() {
  const { organization } = useOrganization();
  return (
    <div>
      <header className="flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex flex-1">
          <SearchInput />
        </div>

        <div className="lg:hidden flex-1">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  width: "min(330px,100%)",
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
        </div>

        {organization && <InviteButton />}

        <UserButton />
      </header>
    </div>
  );
}

export default Navbar;
