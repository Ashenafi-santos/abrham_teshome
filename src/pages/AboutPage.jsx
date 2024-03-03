import React from "react";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import Navbar from "../components/Navbar";
import Office from "../assets/office.jpg";
import OrganizationsComponent from "../components/OrganizationsComponent";
import Accounting from "../assets/accounting.jpg";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col font-Raleway px-4 md:px-10 lg:px-20 py-10 bg-gray-100"
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex justify-center items-center">
            <img
              src={Office}
              className="h-auto md:h-[500px] md:w-[1000px] w-full rounded-md shadow-lg"
              alt="Office"
            />
          </div>
          <div className="flex flex-col justify-center text-justify">
            <h1 className="text-2xl md:text-3xl text-primary font-bold mb-4">
              About Abraham Teshome Ageze Certified Audit Firm
            </h1>
            <p className="text-md md:text-md text-gray-700 mb-4">
              Abraham Teshome Ageze Certified Audit Firm is a distinguished
              member of the Association of Chartered Certified Accountants
              (ACCA), UK. With over 20 years of experience, our firm has been
              providing exceptional audit and accounting services in Ethiopia.
            </p>
            <p className="text-md md:text-md text-gray-700 mb-4">
              Founded in June 2004, our firm operates in accordance with
              Ethiopian laws, ensuring the highest standards of professionalism
              and integrity. Managed by a U.K qualified Chartered Certified
              Accountant, we specialize in auditing, accounting, and consultancy
              services.
            </p>
            <p className="text-md md:text-md text-gray-700 mb-4">
              Ato Abraham Teshome, our esteemed auditor, consultant, and
              accountant, has been instrumental in advancing the auditing
              profession in Ethiopia. As a member of the Ethiopian Professional
              Accountants and Auditors Association (EPAAA), he brings a wealth
              of expertise and dedication to our firm.
            </p>
            <p className="text-md md:text-md text-gray-700 mb-4">
              Our commitment to excellence and ethical practices sets us apart,
              making Abraham Teshome Ageze Certified Audit Firm the trusted
              choice for all your audit and accounting needs in Ethiopia.
            </p>
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-xl text-primary md:text-2xl font-semibold">
            During his tenure, he has held the following positions
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 pt-10">
            <Timeline />
            <div className="flex justify-center">
              <img
                src={Accounting}
                className="w-full md:w-[500px] "
                alt="Accounting"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="md:text-lg text-gray-700 text-justify">
            In his experience as Principal and audit manager, Mr. Abraham has
            audited and reviewed internal control systems, conducted meetings,
            as well as discussed and agreed on audit reports, and other related
            matters with top management of various governmental,
            non-governmental, and private organizations.
          </p>
        </div>
        <div className="py-10">
          <OrganizationsComponent />
          <div></div>
        </div>
        <div>
          <p className="text-lg md:text-xl text-gray-700 text-justify">
            Mr. Abraham’s employment in various companies and institutions
            working in different positions has exposed him to various working
            environments and systems which helped him attain his current
            competencies.
          </p>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AboutPage;
