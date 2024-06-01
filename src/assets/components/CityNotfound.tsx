// Loading.tsx
import React, { useEffect } from 'react';
import lottie from "lottie-web/build/player/lottie_light"
import NotFound from "../images/CityNotfound.json"


const CityNotFound: React.FC = () => {
    useEffect(() => {
        const container = document.getElementById("CityNotFound");
        if (!container) return; // Handle case where element is not found
    
        const instance = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: NotFound,
        });
    
        // Return clean up function here
        return () => instance.destroy();
      }, []);
  return (
    <div className="loading flex -mt-[40px]">
      <div className='text-red-700 mt-[4.25rem]'>  City Not Found</div>
      <div id="CityNotFound" className="h-40 w-40 " />

    </div>
  );
}

export default CityNotFound;


