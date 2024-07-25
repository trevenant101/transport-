import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ContactCard = () => {
  return (
    <div className="grid h-80 w-[15] md:w-[25rem] place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 20 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
  
    const rect = ref.current.getBoundingClientRect();
  
    const width = rect.width;
    const height = rect.height;
  
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
  
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
  
    x.set(rX);
    y.set(rY);
  };
  

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-72 w-80  md:w-96 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div className="px-4">
          <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
          <p className="text-base mb-2">
            <strong>Phone:</strong> +91 7073755815
          </p>
          <p className="text-base mb-2">
            <strong>Email:</strong> bansalroadways1@gmail.com
          </p>
          <p className="text-base">
            <strong>Address:</strong> Opposite Truck Union Office
            Transport Nagar, Bhilwara, Rajasthan(311001)
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
