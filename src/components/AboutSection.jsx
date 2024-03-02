import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import audit from "../assets/audit.jpeg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > sectionTop - windowHeight + sectionHeight * 0.5) {
        section.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex justify-center items-center">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[900px] gap-5 flex flex-col justify-center p-10 font-Raleway rounded-lg "
      >
        <h2 className="text-3xl font-bold mb-4">
          About Abraham Teshome Ageze Certified Audit Firm
        </h2>
        <p className="text-gray-700 mb-4">
          Abraham Teshome Ageze Certified Audit Firm is a member of the
          Association of Chartered Certified Accountants, UK. He has received a
          Professional Competence Certificate from the Federal Democratic
          Republic of Ethiopia Office of the Federal Auditor General and
          currently from Accounting and Auditors Board of Ethiopia (AABE) to
          provide Audit and Accounting services in Ethiopia.
        </p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center hover:bg-white hover:border-blue-500 hover:border hover:text-black bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          <Link to={"/about"}>Read More</Link>
          <BsArrowRight className="ml-2" />
        </motion.button>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:flex justify-end hidden"
      >
        <img src={audit} className="w-[80%]" />
      </motion.div>
    </div>
  );
};

export default AboutSection;
