import Hint from "@/app/(dashboard)/_components/Hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name?: string;
  src?: string;
  fallback?: string;
  borderColor?: string;
}

function UserAvatar({ name, src, fallback, borderColor }: UserAvatarProps) {
  return (
    <Hint label={name || "Teammate"} side="bottom" sideOffset={16}>
      <Avatar className="w-8 h-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </Hint>
  );
}

export default UserAvatar;
