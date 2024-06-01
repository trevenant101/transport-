// import { cn } from "../../Util/cn";

import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import truck from "../../images/Truck1.jpg";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2 hover:scale-105" : "hover:scale-105" }
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Road Transportation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <img src={truck} className="h-40 w-80" />,
    icon: (
      <IconClipboardCopy
        className="h-4 w-4 text-neutral-500 bg-[]"
        
      />
    ),
  },
  {
    title: "ODC Transportation",
    description: "Dive into the transformative power of technology.",
    header: <img src={truck} className="h-40 w-full" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Low Bed Trailer",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <img src={truck} className="h-40 w-full" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "High Bed Trailer",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <img src={truck} className="h-40 w-full" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Flat Bed Trailers",
    description: "Join the quest for understanding and enlightenment.",
    header: <img src={truck} className="h-40 w-full" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Full Truck Load",
    description: "Experience the thrill of bringing ideas to life.",
    header: <img src={truck} className="h-40 w-full" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <img src={truck} className="h-40 w-full" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
