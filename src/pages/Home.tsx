import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";
import { BentoGridDemo } from "../assets/components/Bento/BentoGrid.Demo";
import Footer from "../assets/components/Footer";
import { TypewriterEffectSmoothDemo } from "../assets/components/Typewriter/TypeWriterDemo";
import { Link } from "react-router-dom";
import truck1 from "../assets/images/trucks/Truck1.jpeg"
import truck2 from "../assets/images/trucks/highway-3392100.jpg"
import truck3 from "../assets/images/trucks/flat_bed.webp";

const slideImages = [
  {
    url: truck1,
    caption: "Heavy Transport Specialist",
  },
  {
    url: truck3,
    caption: "Transport Service & ODC Transport",
  },
  {
    url: truck2,
    caption: "Reliable Transport Services",
  },
];

const Home = () => {
  return (
    <>
      <div className="overflow-auto">
        <div className="slide-container">
          <Slide indicators infinite>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="flex items-center justify-center h-[400px] bg-cover bg-center bg-" style={{ backgroundImage: `url(${slideImage.url})` }}>
                <div className="text-6xl text-white animate-fade-down">
                  {slideImage.caption}
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <div className="flex justify-center ml-2 text-6xl text-orange-700">
            <TypewriterEffectSmoothDemo />
          </div>
          <div className="mt-2 px-10 pb-5 pt-0 md:py-10 sm:px-40 text-xl border-none">
            Krishna Freight Carriers is a successful Bhilwara based Goods Transport Company. Mr Krishna Kumar Bansal who has a experience In this field since 2001. Our main focus is on transporting Heavy Load Trailor Services and Oversized Cargo Services and also provide small 10 MT truck and Heavy Goods (ODC) across all over India. Our trained and knowledgeable staff working with a large numbers of vehicles including Low Bed Trailor, High Bed Trailor, ODC Consignment and the latest Equipment and Machinery and mainly ensure that the job done perfectly over the period of time.
          </div>
          <div className="flex flex-row space-x-3">
            <Link to="/AboutUs">
              <AwesomeButton type="twitter" ripple className="w-40">
                Read More
              </AwesomeButton>
            </Link>
            <Link to="/ContactUs">
              <AwesomeButton type="youtube" ripple className="w-40">
                Contact Us
              </AwesomeButton>
            </Link>
          </div>
          <div className="mt-5 px-2 md:px-5">
            <BentoGridDemo />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Home;
