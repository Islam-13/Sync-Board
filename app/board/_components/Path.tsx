import { getSvgPathFromStroke } from "@/lib/utils";
import getStroke from "perfect-freehand";

interface PathProps {
  x: number;
  y: number;
  points: number[][];
  fill: string;
  onPointerDown?: (e: React.PointerEvent) => void;
  stroke?: string;
}

function Path({ x, y, points, fill, onPointerDown, stroke }: PathProps) {
  return (
    <path
      className="drop-shadow-md"
      x={0}
      y={0}
      fill={fill}
      stroke={stroke}
      strokeWidth={1}
      onPointerDown={onPointerDown}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      d={getSvgPathFromStroke(
        getStroke(points, {
          size: 18,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        })
      )}
    />
  );
}

export default Path;
