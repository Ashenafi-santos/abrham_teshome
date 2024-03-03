import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import trust from "../assets/trust.jpg";
import finince from "../assets/finince.jpg";
import accountingService from "../assets/accounting-service.jpg";
import { Link } from "react-router-dom";

const slogans = [
  "Excellence in Accounting Services",
  "Ensuring Financial Compliance",
  "Trustworthy Audits for Your Business",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [accountingService, finince, trust];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [images.length]);

  return (
    <div className="relative w-full font-Raleway h-screen overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="absolute left-4 z-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 z-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none"
        >
          <FaChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <div className="absolute inset-0 p-8 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="max-w-3xl text-center">
          <a href="#" className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Welcome to Abraham Teshome Ageze Certified Audit Firm
            </h1>
          </a>
          <p className="text-white text-lg lg:text-xl mb-8">
            We are a team of Chartered Certified Accountants (UK) & Authorized
            Auditors, dedicated to providing exceptional financial services
            tailored to your needs.
          </p>
          <div className="mb-8">
            <Link
              to={"/about"}
              className="text-white bg-primary hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-300 mr-4"
            >
              Learn More
            </Link>
            <Link
              to={"/contact"}
              className="text-primary bg-white hover:bg-gray-200 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
          <p className=" text-xl lg:text-3xl font-semibold mb-4 text-secondary  drop-shadow-xl ">
            {slogans[currentImageIndex]}
          </p>
        </div>
        <div className="text-right">
          <div className="bg-primary/50 shadow-lg shadow-primary text-white rounded-lg p-4 md:-rotate-45 absolute md:top-20 top-2 z-20 left-14 md:-left-3">
            <h2 className="text-xl font-bold mb-2">
              Over 20 Years of Experience
            </h2>
            <p className="text-lg">Trusted since </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
