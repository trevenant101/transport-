import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import CityNotFound from "./CityNotfound";
import { FaAnglesRight } from "react-icons/fa6";
import { AwesomeButton } from "react-awesome-button";

const cities = [
  "Agartala",
  "Ahmadnagar",
  "Ahmedabad",
  "Aizawl",
  "Ajmer",
  "Allahabad",
  "Almeda",
  "Amravati",
  "Amritsar",
  "Angul",
  "Aurangabad",
  "Bangalore",
  "Baramati",
  "Bastar",
  "Belgaum",
  "Bellari",
  "Bellary",
  "Bharuch",
  "Bhatinda",
  "Dehradun",
  "Dibrugarh",
  "Dispur",
  "Durg",
  "Delhi",
  "Ernakulam",
  "Faridabad",
  "Gandhinagar",
  "Gandhi Dham",
  "Gangtok",
  "Gurgaon",
  "Gwalior",
  "Gaya",
  "Guntur",
  "Haldia",
  "Himachal Pradesh",
  "Hoshiarpur",
  "Hugli",
  "Hyderabad",
  "Jaipur",
  "Jaisalmer",
  "Jalgaon",
  "Jamnagar",
  "Jamshedpur",
  "Kanpur",
  "Kapurthala",
  "Kochi",
  "Kohima",
  "Kolhapur",
  "Kolkata",
  "Kota",
  "Kottayam",
  "Kozhikode",
  "Kutch",
  "Lucknow",
  "Ludhiana",
  "Madgaon",
  "Madurai",
  "Pune",
  "Puri",
  "Patna",
  "Rajkot",
  "Ranchi",
  "Ribhoi",
  "Raipur",
  "Rohtas",
  "Salem",
  "Sambalpur",
  "Satara",
  "Sikandarabad",
  "Sonipat",
  "Surat",
  "Tata Nagar",
  "Thane",
  "Thanjavur",
  "Thiruvananthapuram",
  "Thrissur",
];

const CityList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const citiesToShow = showMore ? filteredCities : filteredCities.slice(0, 6);

  return (
    <>
      <div className="flex justify-center">
        <div className="text-wrap text-xl mx-6 md:mx-0 font-bold">
          We provide ODC transportation services from Vadodara and several major
          cities to All Over India. The list of Cities where we provide our
          services are as below:
        </div>
      </div>
      <div className="container grid mx-auto p-4 font-sans">
        <input
          type="text"
          className="p-2 md:w-96 relative flex justify-self-center mb-4 border border-[#A4A5FF] rounded-lg"
          placeholder="Search cities..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredCities.length === 0 ? (
          <div className="flex justify-center mt-4 text-red-500 font-bold">
            <CityNotFound/>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 space-x-3 md:space-x-0  gap-2 ml-0 md:ml-28">
              {citiesToShow.map((city, index) => (
                <div
                  key={index}
                  className=" group flex md:hover:scale-125 items-center p-2 border border-gray-200 rounded-lg bg-gray-50 flex-1 md:flex-none md:w-5/12"
                >
                  <span className="mr-2 "><FaAnglesRight  className="group-hover:text-green-700"/></span>
                  <span className="">{city}</span>
                </div>
              ))}
            </div>
            {!showMore && filteredCities.length > 5 && (
              <div className="flex justify-center mt-4">
                <AwesomeButton
                  className=""
                  onPress={toggleShowMore}
                >
                  Show More
                </AwesomeButton>
              </div>
            )}
            {showMore && (
              <div className="flex justify-center mt-4">
                <AwesomeButton
                  className=""
                  onPress={toggleShowMore}
                >
                  Show Less
                </AwesomeButton>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CityList;
