"use client";

interface SelectionPointProps {
  HANDLE_WIDTH: number;
  cursor: string;
  transform: string;
  onResizeHandlePointerDown: () => void;
}

function SelectionPoint({
  HANDLE_WIDTH,
  cursor,
  transform,
  onResizeHandlePointerDown,
}: SelectionPointProps) {
  return (
    <rect
      className="fill-white stroke-1 stroke-blue-500"
      style={{
        cursor,
        transform,
        width: `${HANDLE_WIDTH}px`,
        height: `${HANDLE_WIDTH}px`,
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onResizeHandlePointerDown();
      }}
      x={0}
      y={0}
    />
  );
}

export default SelectionPoint;
