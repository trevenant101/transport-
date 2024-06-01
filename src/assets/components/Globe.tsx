// Loading.tsx
import React, { useEffect } from 'react';
import lottie from "lottie-web/build/player/lottie_light"
import GlobeAnimate from "../images/globe.json"


const Globe: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("Globe");
    if (!container) return; // Handle case where element is not found

    const instance = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: GlobeAnimate,
    });

    // Return clean up function here
    return () => instance.destroy();
  }, []);
  return (
    <div className="loading flex justify-center ">
      {/* <FiLoader color="#36d7b7" /> */}
      <div id="Globe" className="h-72 w-72" />

    </div>
  );
}

export default Globe;


