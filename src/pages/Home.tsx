import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import truck1 from "../assets/images/Truck1.jpg";
import { AwesomeButton } from "react-awesome-button";
import { BentoGridDemo } from "../assets/components/Bento/BentoGrid.Demo";
import Footer from "../assets/components/Footer";
import { TypewriterEffectSmoothDemo } from "../assets/components/Typewriter/TypeWriterDemo";
import { Link } from "react-router-dom";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover", // Changed from 'cover' to 'contain'
  backgroundPosition: "center", // Center the background image
  height: "400px",
};
const slideImages = [
  {
    url: `https://www.transportation.gov/sites/dot.gov/files/pictures/Rural%20Truck-edited.png`,
    caption: "Heavy Transport Specialist",
  },
  {
    url: "https://www.esspl.com/wp-content/uploads/2019/10/tms-thegem-blog-default.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://www.transportation.gov/sites/dot.gov/files/pictures/Rural%20Truck-edited.png",
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
        </div>{" "}
        <div className=" mt-6 flex flex-col items-center">
          <div className="flex justify-center ml-[8px] text-6xl text-orange-700">
            <TypewriterEffectSmoothDemo />
          </div>

          <div className="mt-2 px-10 pb-5 pt-0 md:py-10 sm:px-40 text-xl  border-none">
            Krishna Freight Carriers is a successful Bhilwara based Goods
            Transport Company. Mr Krishna Kumar Bansal who has a experience In
            this field since 2001. Our main focus is on transporting Heavy Load
            Trailor Services and Oversized Cargo Services and also provide small
            10 MT truck and Heavy Goods (ODC) across all over India. Our trained
            and knowledgeable staff working with a large numbers of vehicles
            including Low Bed Trailor, High Bed Trailor, ODC Consignment and the
            latest Equipment and Machinery and mainly ensure that the job done
            perfectly over the period of time.
          </div>
          <div className="flex flex-row space-x-3">
            <Link key="AboutUs" to="/AboutUs ">
              <AwesomeButton type="twitter" ripple={true} className="w-40 ">
                {" "}
                Read More
              </AwesomeButton>
            </Link>
            <Link key="ContactUs" to="/ContactUs ">
              <AwesomeButton type="youtube" ripple={true} className="w-40">
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
