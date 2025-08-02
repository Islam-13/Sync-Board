"use client";

import Hint from "@/app/(dashboard)/_components/Hint";
import { Button } from "@/components/ui/button";
import { FontOptions } from "@/types/canvas";
import { useMutation, useSelf } from "@liveblocks/react";
import {
  AArrowDown,
  AArrowUp,
  Bold,
  CaseLower,
  CaseUpper,
  Italic,
  Underline,
} from "lucide-react";
import { useState } from "react";

function NoteTextSettings() {
  const selection = useSelf((me) => me.presence.selection);
  const [options, setOptions] = useState<FontOptions>();

  const setFont = useMutation(
    ({ storage }, options: FontOptions) => {
      const liveLayers = storage.get("layers");

      selection?.forEach((id) => {
        const oldOpions = liveLayers.get(id)?.get("fontOptions");
        setOptions(oldOpions);

        liveLayers.get(id)?.set("fontOptions", { ...oldOpions, ...options });
        setOptions({ ...oldOpions, ...options });
      });
    },
    [selection, options, setOptions]
  );

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div>
        <Hint label="Small">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fSize: "16px" })}
          >
            <AArrowDown />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Medium">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fSize: "32px" })}
          >
            <AArrowDown />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Large">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fSize: "64px" })}
          >
            <AArrowUp />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Base (Default)">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ txtTransform: "lowercase" })}
          >
            <CaseLower />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="UpperCase">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ txtTransform: "uppercase" })}
          >
            <CaseUpper />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Italic">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fStyle: !options?.fStyle })}
          >
            <Italic />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Bold">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fWeight: !options?.fWeight })}
          >
            <Bold />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Underline">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ txtDecoration: !options?.txtDecoration })}
          >
            <Underline />
          </Button>
        </Hint>
      </div>
    </div>
  );
}

export default NoteTextSettings;
