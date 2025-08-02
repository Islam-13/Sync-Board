"use client";

import Hint from "@/app/(dashboard)/_components/Hint";
import { Button } from "@/components/ui/button";
import { FontOptions } from "@/types/canvas";
import { useMutation, useSelf } from "@liveblocks/react";
import { Activity, AudioWaveform, LineSquiggle } from "lucide-react";

function PencilTextSettings() {
  const selection = useSelf((me) => me.presence.selection);

  const setFont = useMutation(
    ({ storage }, options: FontOptions) => {
      const liveLayers = storage.get("layers");

      selection?.forEach((id) => {
        const oldOpions = liveLayers.get(id)?.get("fontOptions");

        liveLayers.get(id)?.set("fontOptions", { ...oldOpions, ...options });
      });
    },
    [selection]
  );

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div>
        <Hint label="Small">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fSize: "13px" })}
          >
            <LineSquiggle strokeWidth={0.5} />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Large">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fSize: "24px" })}
          >
            <Activity strokeWidth={1.5} />
          </Button>
        </Hint>
      </div>

      <div className="flex  gap-0.5 pl-2 ml-2 border-l border-neutral-300">
        <Hint label="Medium">
          <Button
            variant="board"
            size="icon"
            onClick={() => setFont({ fSize: "35px" })}
          >
            <AudioWaveform strokeWidth={3} />
          </Button>
        </Hint>
      </div>
    </div>
  );
}

export default PencilTextSettings;
