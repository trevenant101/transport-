// Loading.tsx
import React, { useEffect } from 'react';
import lottie from "lottie-web/build/player/lottie_light"
import truckLoading from "../images/Animation - 1716555990576.json"


const Loading: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("reactnoData");
    if (!container) return; // Handle case where element is not found

    const instance = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: truckLoading,
    });

    // Return clean up function here
    return () => instance.destroy();
  }, []);
  return (
    <div className="loading">
      {/* <FiLoader color="#36d7b7" /> */}
      <div id="reactnoData" className="h-72 w-96 " />

    </div>
  );
}

export default Loading;


