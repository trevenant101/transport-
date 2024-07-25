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
import truck from "../../images/trucks/Road_transportation_truck.webp";
import truck1 from "../../images/trucks/Truck1.jpeg";
import truck2 from "../../images/trucks/low_bed_truck.jpg";
import truck3 from "../../images/trucks/high-bed-trailor.jpg";
import truck4 from "../../images/trucks/flat_bed.webp";
import truck5 from "../../images/trucks/full-load-truck.webp";
import truck6 from "../../images/trucks/truck-cargo.webp";
import { FaTruck } from "react-icons/fa6";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          header={item.header}
          icon={item.icon}
          className={
            i === 3 || i === 6
              ? "md:col-span-2 hover:scale-105"
              : "hover:scale-105"
          }
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Road Transportation",
    header: <img src={truck} className="h-40 w-full" />,
    icon: <FaTruck className="h-4 w-4 text-neutral-500 bg-[]" />,
  },
  {
    title: "ODC Transportation",
    header: <img src={truck1} className="h-40 w-full" />,
    icon: <FaTruck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Low Bed Trailer",
    header: <img src={truck2} className="h-40 w-full" />,
    icon: <FaTruck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "High Bed Trailer",
    header: <img src={truck3} className="h-40 w-full" />,
    icon: <FaTruck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Flat Bed Trailers",
    header: <img src={truck4} className="h-40 w-full" />,
    icon: <FaTruck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Full Truck Load",
    header: <img src={truck5} className="h-40 w-full" />,
    icon: <FaTruck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cargo Services",
    header: <img src={truck6} className="h-40 w-full" />,
    icon: <FaTruck className="h-4 w-4 text-neutral-500" />,
  },
];
