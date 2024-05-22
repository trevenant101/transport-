import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "react-awesome-button/dist/styles.css";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-6 flex flex-wrap justify-between ">
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-2">About Us</h2>
        <p className="text-sm">
          Vishwakarma Transport is an accomplished Heavy Transport company based
          out of Vadodara. Mr. Sanjay Sharma, having experience in the field
          since 2005.
        </p>
      </div>
      <div className="w-full md:w-1/5 mb-6 ml-[60px] md:mb-0">
        <h2 className="text-lg font-semibold mb-2">We're Social</h2>
        <div className="flex flex-col space-y-3 mb-2">
          <AwesomeButton type="twitter" ripple={true} className="w-40">Twitter</AwesomeButton>
          <AwesomeButton type="linkedin" ripple={true} className="w-40">LinkedIn</AwesomeButton>
          <AwesomeButton type="whatsapp" ripple={true} className="w-40">Whatsapp</AwesomeButton>
        </div>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-2">Quick Navigation</h2>
        <ul className="space-y-1">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Odc Transport
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Client
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
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
            vishwakarmatransport01@gmail.com
          </a>
        </p>
      </div>

      <div className="w-full text-center mt-6 border-t pt-6 ">
        <p className="text-sm">
          &copy; Vishwakarma Transport - 2005 to 2023 | All Rights Reserved.
        </p>
        <p className="text-sm">Designed by Naman Pokharna</p>
      </div>
    </footer>
  );
};

export default Footer;
