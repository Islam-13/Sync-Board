import { memo } from "react";
import { useOthersConnectionIds } from "@liveblocks/react/suspense";
import { shallow, useOthersMapped } from "@liveblocks/react";

import Cursor from "./Cursor";
import Path from "./Path";
import { colorToCss } from "@/lib/utils";

const CursorsPresence = memo(function CursorsPresence() {
  return (
    <>
      <Drafts />
      <Cursors />
    </>
  );
});

export default CursorsPresence;

function Cursors() {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((id) => (
        <Cursor key={id} connectionId={id} />
      ))}
    </>
  );
}

function Drafts() {
  const others = useOthersMapped(
    (other) => ({
      pencilDraft: other.presence.pencilDraft,
      penColor: other.presence.penColor,
    }),
    shallow
  );

  return (
    <>
      {others.map(([key, other]) => {
        if (other.pencilDraft) {
          return (
            <Path
              key={key}
              x={0}
              y={0}
              points={other.pencilDraft}
              fill={other.penColor ? colorToCss(other.penColor) : "#000"}
            />
          );
        }

        return null;
      })}
    </>
  );
}
