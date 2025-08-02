import { cn, colorToCss } from "@/lib/utils";
import { TextLayer } from "@/types/canvas";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { Handlee } from "next/font/google";
import { useMutation } from "@liveblocks/react";

const font = Handlee({ subsets: ["latin"], weight: ["400"] });

interface TextProps {
  id: string;
  layer: TextLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

function Text({ id, layer, onPointerDown, selectionColor }: TextProps) {
  const { x, y, width, height, fill, value, fontOptions } = layer;

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
        style={{
          color: fill ? colorToCss(fill) : "#000",
          fontSize: fontOptions?.fSize ? fontOptions.fSize : "32px",
          fontWeight: fontOptions?.fWeight ? "bolder" : "normal",
          fontStyle: fontOptions?.fStyle ? "italic" : "normal",
          textDecoration: fontOptions?.txtDecoration ? "underline" : "none",
          textTransform:
            fontOptions?.txtTransform === "uppercase"
              ? "uppercase"
              : "lowercase",
        }}
      ></ContentEditable>
    </foreignObject>
  );
}

export default Text;
