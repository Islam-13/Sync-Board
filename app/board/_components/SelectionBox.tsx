"use client";

import { useSelectionBounds } from "@/hooks/useSelectionBounds";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { useSelf, useStorage } from "@liveblocks/react";
import { memo } from "react";
import SelectionPoint from "./SelectionPoint";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

const SelectionBox = memo(function SelectionBox({
  onResizeHandlePointerDown,
}: SelectionBoxProps) {
  const myLayerId = useSelf((me) =>
    me.presence.selection.length === 1 ? me.presence.selection[0] : null
  );
  const isShowingHanles = useStorage(
    (r) => myLayerId && r.layers.get(myLayerId)?.type !== LayerType.Path
  );

  const bounds = useSelectionBounds();

  if (!bounds) return;

  return (
    <>
      <rect
        className="fill-transparent stroke-1 stroke-blue-500 pointer-events-none"
        style={{ transform: `translate(${bounds.x}px, ${bounds.y}px)` }}
        width={bounds.width}
        height={bounds.height}
      />

      {isShowingHanles && (
        <>
          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="nwse-resize"
            transform={`translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Top + Side.Left, bounds)
            }
          />

          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="ns-resize"
            transform={`translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Top, bounds)
            }
          />

          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="nesw-resize"
            transform={`translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y - HANDLE_WIDTH / 2}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Top + Side.Right, bounds)
            }
          />

          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="ew-resize"
            transform={`translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Right, bounds)
            }
          />

          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="nwse-resize"
            transform={`translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Bottom + Side.Right, bounds)
            }
          />

          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="ns-resize"
            transform={`translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Bottom, bounds)
            }
          />

          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="nesw-resize"
            transform={`translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds)
            }
          />

          <SelectionPoint
            HANDLE_WIDTH={HANDLE_WIDTH}
            cursor="ew-resize"
            transform={`translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height / 2}px)`}
            onResizeHandlePointerDown={() =>
              onResizeHandlePointerDown(Side.Left, bounds)
            }
          />
        </>
      )}
    </>
  );
});

export default SelectionBox;
