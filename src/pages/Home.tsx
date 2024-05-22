import React from "react";
import { Fade, Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import truck1 from "../assets/images/Truck1.jpg";
import { Button, Card } from "antd";
import { GlobeAltIcon } from "@heroicons/react/24/outline";



const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "contain", // Changed from 'cover' to 'contain'
  backgroundPosition: "center", // Center the background image
  height: "400px",
};
const slideImages = [
  {
    url: `${truck1}`,
    caption: "Heavy Transport Specialist",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const Home = () => {
  return (
    <>
      <div className="overflow-auto">
        <div className="slide-container">
          <Slide indicators infinite>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <div className="bg-none text-6xl text-white animate-fade-down ">
                    {slideImage.caption}
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>

        <div className="px-52 mt-6 flex flex-col items-center">
          <div className="flex justify-center text-6xl text-orange-700">
            Welcome to <span className="text-black ml-3">KFC</span>
          </div>

          <Card className="mt-6 h-40 w-full border-none">
            Index Vishwakarma Transport is a successful Vadodara-based heavy goods
            transport company. Mr. VIKRAM SHARMA who has experience in this field
            since 2005. Our main focus is on transporting Oversized and Heavy
            Cargo (ODC, Oversized Cargo) across India. Our trained and
            knowledgeable staff working with a large number of vehicles, including
            low-bed trailers, high-bed trailers, ODC consignments, and the latest
            equipment and machinery, ensure that the job is done perfectly every
            time.
          </Card>
          
          <GlobeAltIcon height={20} width={20}/>
        </div>
      </div>
    </>
  );
};

export default Home;
