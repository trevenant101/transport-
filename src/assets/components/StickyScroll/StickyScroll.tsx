"use client";
import { StickyScroll } from "./sticky-scroll-reveal";
import truck1 from "../../images/trucks/Road_transportation_truck.webp";
import truck2 from "../../images/trucks/Truck1.jpeg";
import truck3 from "../../images/trucks/low_bed_truck.jpg";
import truck4 from "../../images/trucks/high-bed-trailor.jpg";
import truck5 from "../../images/trucks/flat_bed.webp";
import truck6 from "../../images/trucks/full-load-truck.webp";

const content = [
  {
    title: "ROAD TRANSPORTATION",
    description:
      "At Krishna Freight Carrier, we offer logistic solutions by road from all major cities across India.Today we are proud to declare that we have good number of vehicles with trained drivers. We own forklifts, cranes and material handling equipment. We offer 24X7 logistic solutions and freight services",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src={truck1}></img>
      </div>
    ),
  },
  {
    title: "ODC Transportation",
    description:
      "We at Krishna Freight Carrier, offer ODC cargo services by road across India. We provide logistics solutions for all unusual handling of heavy goods including heavy machinery and plant. Our drivers have hands-on experience in moving over dimension machinery, heavy weight consignments on flat racks and open top containers. We ensure that your cargo is securely tied for transportation so that it arrives without damage.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src={truck2}></img>
      </div>
    ),
  },
  {
    title: "Low Bed Trailer",
    description:
      "Low Bed Trailers have a bed height of 2-3 feet. These are generally used when the height of the cargo is above 12 feet or there are many lower overhead obstructions. Another use of Low Bed Trailer is to lower the CG of very heavy cargo. The loading deck size varies but is generally around 25 feet in length and 8.5 feet in width. We have used low bed trailers to transport cargos of up to 26 feet height and having weights up to 60 tons. We have experience in transporting goods all over India.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img src={truck3}></img>
      </div>
    ),
  },
  {
    title: "High Bed Trailer",
    description:
      "High Bed Trailer have a bed height of 4 feet and are generally used to carry loads with relatively greater height. Transporting over High Bed Trailers is preferred over being transported over High Bed Trailers to avoid overhead obstructions and keep the CG low. We have used High Bed Trailers with cabin cowl removed to transport very long loads having relatively less height to keep the CG as low as possible, hence preventing tipping. Our experience helps us to foresee such occurrences and take necessary preventive measures.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src={truck4}></img>
      </div>
    ),
  },
  {
    title: "Flat Bed Trailers",
    description:
      "Flatbed Trailers are designed to cater to your Specific Transportation Needs. Flatbed truck, trailer or lorry are just what the name suggests. These trucks have completely flat trailers bereft of body, roof or side walls.  Having no room or body serves an important purpose here. It makes it rather convenient to load or unload heavy cargo on such trucks. For all intents and purposes they are used to transport heavy cargo that are not vulnerable to vagaries of nature such as harsh rain, wind or sun. flatbed trailers are also employed to carry abnormally heavy loads that cannot be fitted inside the body of the regular truck",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src={truck5}></img>
      </div>
    ),
  },
  {
    title: "Full Truck Load",
    description:
      "We have a stronghold in Full Truck Load Services. It forms part of our core offerings. With our dedication and prolonged investment in the industry, we have attached in our network over 30 branches across India. Today we have a myriad of vehicles in our fleet, which includes trucks, trailers and solely owned vehicles. Our attached fleet also includes cranes, forklifts and other material handling equipment. We also offer round the clock service to our prestigious clients.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src={truck6}></img>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
