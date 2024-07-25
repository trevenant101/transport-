// AboutUs.tsx
import React, { Suspense, lazy } from "react";
import Loading from "../assets/components/Loading";
import Footer from "../assets/components/Footer";
import img1 from "../assets/images/Logistics-rafiki.svg";
import Checklist from "../assets/images/Checklist.jpg";
import Truck from "../assets/images/6229003-removebg-preview.png";
import GlobeImage from "../assets/images/705-removebg-preview.png"; // Import your flat globe image

const BackgroundBoxesDemo = lazy(
  () => import("../assets/components/BackgroundBox/Background")
);

const AboutUs: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BackgroundBoxesDemo PageName="About Us" />
      </Suspense>
      <div className="container mx-auto px-8 py-8">
        <section className="mb-10 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:mr-6 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              About{" "}
              <span className="text-blue-700">Krishna Freight Carrier</span>
            </h1>
            <p className="text-gray-600 mb-4">
              Krishna Freight Carrier was established in 2001 by Mr. Krishna
              Kumar Bansal with many years of experience in the Logistics
              Industry and a passionate belief in transforming lives through
              transportation.
            </p>
            <p className="text-gray-600 mb-4">
              Our registered office and branches across India are equipped with
              well-qualified and experienced staff to provide round-the-clock
              services. We offer Express Service (if required) with nominal
              charges for quick and timely delivery.
            </p>
            <p className="text-gray-600">
              Krishna Freight Carrier is committed to serving customers by
              offering complete transport services. We use a computerized
              monitoring system to track our fleet, ensuring efficiency and
              timely delivery. Our business philosophy revolves around customer
              dedication, innovation, and social responsibility.
            </p>
          </div>
          <div className="md:w-1/3 md:ml-6">
            <img
              src={GlobeImage}
              alt="Globe"
              className="w-full h-auto rounded-md"
            />
          </div>
        </section>

        <section className="mb-10 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/3 md:mr-6 mb-6 md:mb-0">
            <img
              src={Checklist}
              alt="Checklist"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="relative md:left-[31em]">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Key <span className="text-blue-700">Features</span>
            </h1>
            <ul className="list-disc list-inside text-gray-600 ">
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

        <section className="mb-10 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:mr-6 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Services <span className="text-blue-700">Offered </span>
            </h1>
            <p className="text-gray-600 mb-4">
              Krishna Freight Carrier operates a large fleet of trucks,
              trailers, and ancillary vehicles ensuring safe delivery. With
              regional offices across India, we offer affordable prices and
              excellent service 24/7. We coordinate with you to ensure a
              hassle-free experience and develop cost-effective logistics
              solutions for transporting your valuables.
            </p>
            <p className="text-gray-600">
              We specialize in providing customized solutions tailored to your
              specific needs. Our dedicated team is always ready to assist you
              in finding the best logistics solutions.
            </p>
          </div>
          <div className="md:w-1/3 md:ml-6 mb-6 md:mb-0">
            <img src={Truck} alt="Truck" className="w-full h-auto rounded-md" />
          </div>
        </section>

        <section className="mb-10 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/3 md:ml-6 mb-6 md:mb-0">
            <img
              src={img1}
              alt="Logistics"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-2/3 md:ml-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Project & <span className="text-blue-700">ODC</span>
            </h1>
            <ul className="list-disc list-inside text-gray-600">
              Krishna Freight Carrier offers services for the movement of ODC
              and Projects across the country. Features include:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li className="mb-2">
                  Capacity to handle projects of size 75 to 100 TONNES through
                  specialized vehicles and hydraulic axles.
                </li>
                <li className="mb-2">
                  Movement of import/export containers from ports to various
                  locations.
                </li>
                <li className="mb-2">
                  Expertise in handling ODC, machinery & equipment, etc.
                </li>
                <li className="mb-2">
                  Project transportation of entire plant and machinery.
                </li>
                <li>
                  Specialized route service prior to the movement of
                  consignments.
                </li>
              </ul>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
