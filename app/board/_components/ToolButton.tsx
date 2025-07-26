"use client";

import Hint from "@/app/(dashboard)/_components/Hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

function ToolButton({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisabled}
        size="icon"
        variant={isActive ? "boardActive" : "board"}
        onClick={onClick}
      >
        <Icon />
      </Button>
    </Hint>
  );
}

export default ToolButton;
