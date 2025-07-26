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
      <DialogContent className="p-0 border-none bg-transparent">
        <DialogTitle hidden>Organization Profile</DialogTitle>

        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
}

export default InviteButton;
