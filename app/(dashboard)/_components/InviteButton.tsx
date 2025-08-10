import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          <span>Invite Members</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 border-none w-[min(100%,750px)] h-[90%]">
        <DialogTitle hidden>Organization Profile</DialogTitle>

        <OrganizationProfile
          routing="hash"
          appearance={{
            elements: {
              rootBox: { width: "100%", height: "100%" },
              cardBox: { width: "100%", maxWidth: "100%", height: "100%" },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default InviteButton;
