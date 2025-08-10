"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Hint from "../Hint";

function NewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create Organization" side="right" sideOffset={12}>
            <button className="bg-white/25 w-full h-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition cursor-pointer">
              <Plus />
            </button>
          </Hint>
        </div>
      </DialogTrigger>

      <DialogContent className="p-0 border-none w-[min(100%,450px)]">
        <DialogTitle hidden>Create Organization</DialogTitle>
        <CreateOrganization
          appearance={{
            elements: {
              rootBox: { width: "100%" },
              cardBox: { width: "100%" },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default NewButton;
