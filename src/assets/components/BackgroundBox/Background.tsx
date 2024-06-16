/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Boxes } from "../BackgroundBox/Background-box";
import { cn } from "../../../Util/cn";

interface BackgroundBoxesDemoProps {
  PageName: string;
}

export default function BackgroundBoxesDemo({ PageName }: BackgroundBoxesDemoProps) {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-9xl text-5xl text-white relative z-20")}>
        {PageName}
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      </p>
    </div>
  );
}
