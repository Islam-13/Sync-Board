import { useOthers, useSelf } from "@liveblocks/react/suspense";
import UserAvatar from "./UserAvatar";
import { connectionIdColor } from "@/lib/utils";

const MAX_USERS = 2;

function Participants() {
  const users = useOthers();
  const currentUser = useSelf();
  const isMoreUsers = users.length > MAX_USERS;
  return (
    <div className="absolute top-2 right-2 bg-white shadow-md rounded-md p-3 flex gap-1 items-center h-12">
      {users.slice(0, MAX_USERS).map((item) => (
        <UserAvatar
          key={item.connectionId}
          src={item.info.picture}
          name={item.info.name}
          fallback={item.info?.name?.[0] || "T"}
          borderColor={connectionIdColor(item.connectionId)}
        />
      ))}

      {currentUser && (
        <UserAvatar
          src={currentUser.info.picture}
          name={`${currentUser.info.name} (You)`}
          fallback={currentUser.info.name?.[0]}
          borderColor={connectionIdColor(currentUser.connectionId)}
        />
      )}

      {isMoreUsers && (
        <UserAvatar
          name={`${users.length - MAX_USERS} more`}
          fallback={`+${users.length - MAX_USERS}`}
        />
      )}
    </div>
  );
}

export default Participants;
