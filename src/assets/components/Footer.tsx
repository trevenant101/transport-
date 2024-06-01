import React from "react";
import "react-awesome-button/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer: React.FC = () => {

  
  return (
    <footer className="bg-gray-100 p-6 flex flex-wrap justify-between ">
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-2">About Us</h2>
        <p className="text-sm">
          Bansal Transport is an accomplished Heavy Transport company based out
          of Vadodara. Mr. Sanjay Sharma, having experience in the field since
          2005.
        </p>
      </div>
      <div className="w-full md:w-1/5 mb-6  md:mb-0 ml-[.25rem] sm:ml-0">
        <h2 className="text-lg font-semibold mb-2">We're Social</h2>
        <div className="flex flex-col space-y-3 mb-2  ">
          <AwesomeButton type="twitter" ripple={true} className="w-40 ">
            {" "}
            <FaTwitter className="relative right-2 text-xl" /> Twitter
          </AwesomeButton>
          <AwesomeButton type="facebook" ripple={true} className="w-40">
            {" "}
            <FaFacebook className="relative right-2 text-xl" /> Facebook
          </AwesomeButton>
          <AwesomeButton type="whatsapp" ripple={true} className="w-40">
            {" "}
            <FaWhatsapp className="relative right-2 text-xl" /> Whatsapp
          </AwesomeButton>
        </div>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-2">Quick Navigation</h2>
        <ul className="space-y-1">
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/AboutUs" className="text-blue-500 hover:underline">
              About us
            </a>
          </li>
          <li>
            <a href="/Services" className="text-blue-500 hover:underline">
              Services
            </a>
          </li>

          <li>
          <FloatingWhatsApp phoneNumber="6350345640" accountName="Naman"  />

            <a href="/ContactUs" className="text-blue-500 hover:underline">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-2">Get In Touch</h2>
        <address className="not-italic text-sm mb-2">
          31-A, Second Floor, Abhishek Complex, Vadsar Road,
          <br />
          Nr Bank of Baroda, Makarpura GIDC, Vadodara, Gujarat
        </address>
        <p className="text-sm">+91 9376842606</p>
        <p className="text-sm">+91 9510948083</p>
        <p className="text-sm">+91 8200983494</p>
        <p className="text-sm">
          <a
            href="mailto:vishwakarmatransport01@gmail.com"
            className="text-blue-500"
          >
            Bansaltransport01@gmail.com
          </a>
        </p>
      </div>

      <div className="w-full text-center mt-6 border-t pt-6 ">
        <p className="text-sm">
          &copy; Bansal Transport - 2005 to 2023 | All Rights Reserved.
        </p>
        <p className="text-sm">Designed by Naman Pokharna</p>
      </div>
    </footer>
  );
};

export default Footer;
