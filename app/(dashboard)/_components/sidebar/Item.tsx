"use client";

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import Hint from "../Hint";

interface ItemProps {
  id: string;
  name: string;
  imageURL: string;
}

function Item({ id, name, imageURL }: ItemProps) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  function onClick() {
    if (!setActive) return;

    setActive({ organization: id });
  }

  return (
    <Hint label={name} side="right" sideOffset={12}>
      <li className="aspect-square relative">
        <Image
          src={imageURL}
          alt={name}
          fill
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </li>
    </Hint>
  );
}

export default Item;
