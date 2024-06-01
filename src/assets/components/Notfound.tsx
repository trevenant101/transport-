import React, { useEffect } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import Notfound from "../images/NotFound.json";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("NotFound");
    if (!container) return; // Handle case where element is not found

    const instance = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Notfound,
    });

    // Return clean up function here
    return () => instance.destroy();
  }, []);
  return (
    <>
      <div className="loading">
        <div id="NotFound" className="h-96 " />
        <div className="flex justify-center">
        <button   className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded hover:scale-125 ease-in-out duration-200">

          <Link key="Home" to="/ ">
        
            <span className="mx-2 my-2">Go Back to Home </span>
          </Link>
        </button>{" "}
        </div>
        {/* <Button>world</Button> */}
      </div>
    </>
  );
};

export default NotFound;
