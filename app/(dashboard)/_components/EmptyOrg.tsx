import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

function EmptyOrg() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty.svg" alt="Empty" height={200} width={200} />

      <h2 className="text-2xl font-semibold mt-6">Welcome to Sync Board</h2>

      <p className="text-sm text-muted-foreground mt-2">
        Create an organization to get started.
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>

          <DialogContent className="">
            <DialogTitle hidden>Create Organization</DialogTitle>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default EmptyOrg;
