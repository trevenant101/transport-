"use client";
import { TypewriterEffectSmooth } from "./TypeWriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
    {
      text: "Krishna",
      className: "text-blue-500 dark:text-blue-500",

    },
    {
      text: "Freight",
      className: "text-blue-500 dark:text-blue-500",

    },
    {
      text: "Carrier.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[3rem]   ">
      
      <TypewriterEffectSmooth  words={words} />
     
    </div>
  );
}
