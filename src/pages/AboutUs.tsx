// AboutUs.tsx
import React, { Suspense, lazy } from "react";
import Loading from "../assets/components/Loading";
import Footer from "../assets/components/Footer";
import Globe from "../assets/components/Globe";
import img1 from "../assets/images/Logistics-rafiki.svg";
import Checklist from "../assets/images/Checklist.jpg";
import Truck from "../assets/images/6229003.jpg";

const BackgroundBoxesDemo = lazy(
  () => import("../assets/components/BackgroundBox/Background")
);

const AboutUs: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BackgroundBoxesDemo PageName="About Us" />
      </Suspense>
      <div className="container mx-auto p-6 font-sans">
        <section className="mb-10 mx-10 flex flex-wrap md:flex-nowrap items-center">
          <div className="md:w-2/3 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-700">Vishwakarma Transport</span>
            </h1>
            <p className="text-gray-600 mb-4">
              Vishwakarma Transport was established in 2005 by Mr. Sanjay Sharma
              with more than many years of experience in the Logistics Industry
              and passionate belief in transforming lives through transportation.
            </p>
            <p className="text-gray-600 mb-4">
              Our Regd. office and branches across India are equipped with
              well-qualified and experienced staff to provide the best and round-the-clock services.
              We provide our clients Express Service (if required) with nominal charges to ensure quick and timely delivery.
            </p>
            <p className="text-gray-600 mb-4">
              Vishwakarma Transport is committed to serving customers by offering complete transport services.
              We have a computerized monitoring system to keep track of the fleet to ensure increased efficiency and timely delivery of your goods.
              Our Business Philosophy revolves around customer dedication, innovation, and social responsibility.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-6">
            <Globe />
          </div>
        </section>

        <section className="mb-10 mx-10 flex flex-wrap md:flex-nowrap items-center">
          <div className="md:w-1/3 mt-8 md:mt-0 md:mr-6">
            <img src={Checklist} alt="Checklist" className="w-full h-auto mb-4 rounded-md" />
          </div>
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Silent Features
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">Time-bound Delivery</li>
              <li className="mb-2">Specialized Container Movement</li>
              <li className="mb-2">
                Containerized Transportation for Fragile Cargo
              </li>
              <li className="mb-2">
                Containers Available in Sizes of 20/32/40 Feet
              </li>
              <li className="mb-2">
                Full Load Vehicles Available for Any Weight
              </li>
              <li>Frequent Tracking Alerts if Required through Mail or SMS</li>
            </ul>
          </div>
        </section>

        <section className="mb-10 mx-10 flex flex-wrap md:flex-nowrap items-center">
          <div className="md:w-2/3 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service</h2>
            <p className="text-gray-600">
              Vishwakarma Transport has a large number of trucks and trailers and
              many other ancillary vehicles to ensure safe delivery. Operating
              through regional offices across India, we offer affordable prices
              and excellent service 24 hours a day. We will coordinate with you to
              provide a hassle-free experience. We develop cost-effective
              logistics concepts for transporting your valuables.
            </p>
            <p className="text-gray-600 mt-4">
              We also specialize in providing customized solutions tailored to your specific needs.
              Our dedicated team is always ready to assist you in finding the best logistics solutions.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-6">
            <img src={Truck} alt="Truck" className="w-full h-auto mb-4 rounded-md" />
          </div>
        </section>

        <section className="mb-10 mx-10 flex flex-wrap md:flex-nowrap items-center">
          <img src={img1} alt="Logistics" className="w-full md:w-1/3 h-auto mb-4 md:mb-0 rounded-md" />
          <div className="md:w-2/3 md:ml-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Project & ODC
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">
                Vishwakarma Transport offers services for the movement of ODC and
                Projects across the country. Features of ODC services include:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li className="mb-2">
                    Capacity to handle projects of size 75 to 100 TONNES through
                    specialized vehicles and hydraulic axles wherever applicable
                  </li>
                  <li className="mb-2">
                    Movement of import/export containers from various ports to
                    various locations
                  </li>
                  <li className="mb-2">
                    Expertise in handling ODC, machinery & equipment, etc.
                  </li>
                  <li className="mb-2">
                    Project transportation of entire plant and machinery
                  </li>
                  <li>
                    Special team of route service prior to the movement of
                    consignments
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
