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
              About <span className="text-blue-700">Vishwakarma Transport</span>
            </h1>
            <p className="text-gray-600 mb-4">
              Vishwakarma Transport was established in 2005 by Mr. Sanjay Sharma
              with many years of experience in the Logistics Industry and a
              passionate belief in transforming lives through transportation.
            </p>
            <p className="text-gray-600 mb-4">
              Our registered office and branches across India are equipped with
              well-qualified and experienced staff to provide round-the-clock
              services. We offer Express Service (if required) with nominal
              charges for quick and timely delivery.
            </p>
            <p className="text-gray-600">
              Vishwakarma Transport is committed to serving customers by
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

        <section className="mb-10 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Features
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
            <div className="md:w-1/3 md:mr-6 mb-6 md:mb-0">
              <img
                src={Checklist}
                alt="Checklist"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </section>

        <section className="mb-10 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:mr-6 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service</h2>
            <p className="text-gray-600 mb-4">
              Vishwakarma Transport operates a large fleet of trucks, trailers,
              and ancillary vehicles ensuring safe delivery. With regional
              offices across India, we offer affordable prices and excellent
              service 24/7. We coordinate with you to ensure a hassle-free
              experience and develop cost-effective logistics solutions for
              transporting your valuables.
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

        <section className="mb-10 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:ml-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Project & ODC
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-4">
                Vishwakarma Transport offers services for the movement of ODC
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
              </li>
            </ul>
            <img
              src={img1}
              alt="Logistics"
              className="w-full md:w-1/3 h-auto rounded-md mb-6 md:mb-0"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
