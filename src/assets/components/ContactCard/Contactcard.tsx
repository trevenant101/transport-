"use client";

import { CardBody, CardContainer, CardItem } from "../ContactCard/Contact";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody  className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto sm:h-60 rounded-xl p-6 mr-0 sm:ml-10 mb-0 sm:mb-5 border-2 border-black  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-900 dark:text-white"
        >
          Contact Us
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <p className="text-base mb-2">
            <strong>Phone:</strong> +91 8009 054294
          </p>
          <p className="text-base mb-2">
            <strong>Email:</strong> info@flightmantra.com
          </p>
          <p className="text-base">
            <strong>Address:</strong> 1000+ Travel partners and 65+ Service city
            across India, USA, Canada & UAE
          </p>
        </CardItem>
        <div className="flex justify-between items-center mt-20"></div>
      </CardBody>
    </CardContainer>
  );
}
