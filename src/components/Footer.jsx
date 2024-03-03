import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LogoTransparnt } from "../assets/logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center gap-10 items-start md:items-center">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="w-full md:w-[400px]">
            <div className="flex items-center gap-5 text-secondary mb-6">
              <img src={LogoTransparnt} alt="PAYS 2024 Logo" className="" />
            </div>
            <p className="text-sm font-thin text-justify">
              Abraham Teshome Ageze Certified Audit Firm, is a member of the
              Association of Chartered Certified Accountants, UK. He has
              received a Professional Competence Certificate from the Federal
              Democratic Republic of Ethiopia Office of the Federal Auditor
              General and currently from Accounting and Auditors Board of
              Ethiopia (AABE) to provide Audit and Accounting services in
              Ethiopia.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <h1 className="text-xl font-semibold border-b-2 border-secondary mb-4">
              USEFUL LINKS
            </h1>
            <nav className="grid grid-cols-1  md:w-[400px] ">
              <div className="flex items-center  font-light border-b-[1px]">
                <IoIosArrowForward />
                <Link
                  to={"/"}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center font-light   border-b-[1px]">
                <IoIosArrowForward />
                <Link
                  to="/#pricing"
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  About Us
                </Link>
              </div>
              <div className="flex items-center font-light   border-b-[1px]">
                <IoIosArrowForward />
                <Link
                  to={"/contact"}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center font-light   border-b-[1px]">
                <IoIosArrowForward />
                <Link
                  to={"/resources"}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Resources
                </Link>
              </div>
              <div className="flex items-center font-light   border-b-[1px]">
                <IoIosArrowForward />
                <Link
                  to={"/services"}
                  className="px-4 py-2 text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="mt-8 md:mt-0 font-Raleway">
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
          </div>
          <p className="text-gray-400 mb-2">Email: atco2016@gmail.com</p>
          <p className="text-gray-400">Phone:</p>
          <div className="ps-14 font-Raleway text-gray-400">
            <p className="text-gray-400 ">+251 9 11 23 13 65 </p>
            <p>+251 11 8 29 84 84</p> <p> +251 11 6 62 06 12</p>
          </div>
          <p className="text-gray-400 mb-4">
            Address: Haya hulet, Addis Ababa, Ethiopia
          </p>
          <div className="flex">
            <a href="#" className="mr-4">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter size={24} />
            </a>
            <a href="#">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
