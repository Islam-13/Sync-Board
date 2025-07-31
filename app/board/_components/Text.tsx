import { cn, colorToCss } from "@/lib/utils";
import { TextleLayer } from "@/types/canvas";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { Handlee } from "next/font/google";
import { useMutation } from "@liveblocks/react";

const font = Handlee({ subsets: ["latin"], weight: ["400"] });

interface TextProps {
  id: string;
  layer: TextleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

function Text({ id, layer, onPointerDown, selectionColor }: TextProps) {
  const { x, y, width, height, fill, value } = layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  function handleValueChange(e: ContentEditableEvent) {
    updateValue(e.target.value);
  }

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      }}
    >
      <ContentEditable
        html={value || "Text"}
        onChange={handleValueChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none",
          font.className
        )}
        style={{ color: fill ? colorToCss(fill) : "#000" }}
      ></ContentEditable>
    </foreignObject>
  );
}

export default Text;
