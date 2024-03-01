import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogoTransparnt } from "../assets/logo";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaBook,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-4 font-Raleway z-10">
      <div className="container mx-auto font-bold px-5 md:px-0 flex justify-around items-start md:items-center">
        <Link to="/">
          <motion.img
            src={LogoTransparnt}
            alt=""
            className="w-[200px] cursor-pointer"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <div className="flex flex-col items-end justify-center p-4">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul
            className={`flex gap-6 text-white text-lg md:text-base ${
              isOpen
                ? "flex-col mt-4 md:mt-0 md:flex-row md:items-center md:gap-6 md:flex"
                : "hidden md:flex"
            }`}
          >
            <NavItem
              to="/"
              currentPath={location.pathname}
              icon={<FaHome />}
              onClick={toggleMenu}
            >
              Home
            </NavItem>
            <NavItem
              to="/about"
              currentPath={location.pathname}
              icon={<FaInfoCircle />}
              onClick={toggleMenu}
            >
              About Us
            </NavItem>
            <NavItem
              to="/services"
              currentPath={location.pathname}
              icon={<FaBriefcase />}
              onClick={toggleMenu}
            >
              Services
            </NavItem>
            <NavItem
              to="/resources"
              currentPath={location.pathname}
              icon={<FaBook />}
              onClick={toggleMenu}
            >
              Resources
            </NavItem>
            <NavItem
              to="/contact"
              currentPath={location.pathname}
              icon={<FaEnvelope />}
              onClick={toggleMenu}
            >
              Contact
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, currentPath, icon, children, onClick }) => {
  const isActive = currentPath === to;

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      className={`flex items-center ${
        isActive
          ? "border-b-2 border-blue-500"
          : "hover:text-gray-300 hover:border-b-2"
      }`}
    >
      <Link
        to={to}
        className={`flex text-sm items-center gap-2 ${
          isActive ? "text-blue-500" : "hover:border-b-2 border-transparent"
        } transition duration-300`}
        onClick={onClick}
      >
        {icon}
        <span>{children}</span>
      </Link>
    </motion.li>
  );
};

export default Navbar;
