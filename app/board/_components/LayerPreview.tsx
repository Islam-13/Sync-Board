"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react";
import { memo } from "react";
import Rectangle from "./Rectangle";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const LayerPreview = memo(function LayerPreview({
  id,
  onLayerPointerDown,
  selectionColor,
}: LayerPreviewProps) {
  const layer = useStorage((r) => r.layers.get(id));

  if (!layer) return null;

  switch (layer.type) {
    case LayerType.Rectangle:
      return (
        <Rectangle
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );

    case LayerType.Ellipse:
      return <div>Ellipse prev</div>;

    case LayerType.Note:
      return <div>Note prev</div>;

    case LayerType.Text:
      return <div>Text prev</div>;

    default:
      console.warn("unknow layer type");

      return null;
  }
});

export default LayerPreview;
