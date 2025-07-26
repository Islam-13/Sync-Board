"use client";

import { connectionIdColor } from "@/lib/utils";
import { useOther } from "@liveblocks/react/suspense";
import { MousePointer2 } from "lucide-react";
import { memo } from "react";

interface CursorProps {
  connectionId: number;
}

const Cursor = memo(function Cursor({ connectionId }: CursorProps) {
  const info = useOther(connectionId, (user) => user.info);
  const cursor = useOther(connectionId, (user) => user.presence?.cursor);

  const name = info.name || "Teammate";

  if (!cursor) return null;

  const { x, y } = cursor;

  return (
    <foreignObject
      className="relative drop-shadow-md"
      style={{ transform: `translateX(${x}px) translateX(${y}px)` }}
      width={name.length * 10 + 24}
      height={50}
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: connectionIdColor(connectionId),
          color: connectionIdColor(connectionId),
        }}
      />

      <div
        className="absolute left-4 px-1.5 py-0.5 text-xs rounded-md font-semibold text-white"
        style={{ background: connectionIdColor(connectionId) }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

export default Cursor;
