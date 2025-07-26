import { useOthersConnectionIds } from "@liveblocks/react/suspense";
import { memo } from "react";
import Cursor from "./Cursor";

// interface CursorsPresenceProps {}
const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((id) => (
        <Cursor key={id} connectionId={id} />
      ))}
    </>
  );
};

const CursorsPresence = memo(() => {
  return (
    <>
      <p>Cursors</p>
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";

export default CursorsPresence;
