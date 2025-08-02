"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

function ColorPicker({ onChange }: ColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <ColorButton color={{ r: 157, g: 2, b: 8 }} onClick={onChange} />
      <ColorButton color={{ r: 56, g: 176, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 123, g: 44, b: 191 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 182, b: 216 }} onClick={onChange} />
      <ColorButton color={{ r: 252, g: 243, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 153, b: 172 }} onClick={onChange} />
      <ColorButton color={{ r: 127, g: 79, b: 36 }} onClick={onChange} />
      <ColorButton color={{ r: 43, g: 44, b: 40 }} onClick={onChange} />
    </div>
  );
}

export default ColorPicker;

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

function ColorButton({ color, onClick }: ColorButtonProps) {
  return (
    <button
      className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition cursor-pointer"
      onClick={() => onClick(color)}
    >
      <div
        className="w-full h-full rounded-md border border-neutral-400"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
}
