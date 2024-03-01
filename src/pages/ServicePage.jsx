import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaTasks,
  FaCog,
  FaDollarSign,
  FaChartBar,
  FaBriefcase,
  FaFileAlt,
  FaBook,
  FaClipboardList,
  FaCalculator,
  FaBullseye,
  FaUserCog,
  FaMoneyBill,
  FaBuilding,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicePage = () => {
  const services = [
    {
      title: "Audit and Assurance",
      icon: FaTasks,
      description:
        "Comprehensive audit and assurance services, ensuring accuracy, compliance, and risk management.",
      subServices: [
        { title: "Financial Statement Audit", icon: FaFileAlt },
        { title: "IFRS/IPSAS Training and Conversion", icon: FaBook },
        { title: "Risk and Governance", icon: FaUserCog },
        { title: "Statutory and Compliance Audit", icon: FaClipboardList },
        {
          title: "Review of Accounting System and Internal Control",
          icon: FaCog,
        },
      ],
    },
    {
      title: "Strategy and Innovation",
      icon: FaBullseye,
      description:
        "Strategic planning, business model transformation, and innovation strategies to drive growth.",
      subServices: [
        { title: "Strategy Formulation", icon: FaChartBar },
        { title: "Business Model Transformation", icon: FaBriefcase },
        { title: "Financial Transformation", icon: FaDollarSign },
        { title: "Financial Performance Management", icon: FaTasks },
        { title: "Process Transformation", icon: FaCog },
        { title: "Strategy and Management Training", icon: FaBook },
        { title: "Project Management", icon: FaTasks },
        { title: "Strategy Implementation Support", icon: FaCog },
      ],
    },
    {
      title: "Tax and Business Support",
      icon: FaCalculator,
      description:
        "Expert tax advisory, compliance services, and business support to optimize financial operations.",
      subServices: [
        { title: "Payroll Outsourcing", icon: FaMoneyBill },
        { title: "Company Registration and Secretarial", icon: FaBuilding },
        { title: "Accounting and Reporting", icon: FaBook },
        { title: "Financial Reporting Support", icon: FaChartBar },
        { title: "Tax Advisory", icon: FaMoneyBill },
        { title: "Tax Compliance", icon: FaClipboardList },
        { title: "Tax Training", icon: FaBook },
      ],
    },
    {
      title: "IT Services",
      icon: FaCog,
      description:
        "Cutting-edge IT solutions including ERP implementation, system audits, and strategic alignment.",
      subServices: [
        { title: "ERP Implementation", icon: FaCog },
        { title: "Implementation of Off-the-Shelf ERP", icon: FaCog },
        {
          title: "Alignment of IT Requirements and Organizational Needs",
          icon: FaBullseye,
        },
        {
          title: "IT Support to Increase Value to the Business",
          icon: FaDollarSign,
        },
        { title: "Development of IT Strategy", icon: FaChartBar },
        { title: "Information System Audit", icon: FaUserCog },
      ],
    },
    {
      title: "Consultancy Advisory and Outsourcing Services",
      icon: FaBriefcase,
      description:
        "Expert consultancy services including project feasibility, financial modeling, and due diligence.",
      subServices: [
        { title: "Project Feasibilities", icon: FaBriefcase },
        {
          title: "Project Management and Financial Projections",
          icon: FaBriefcase,
        },
        { title: "Business Evaluation", icon: FaChartBar },
        {
          title: "Financial Modeling and Business Planning",
          icon: FaDollarSign,
        },
        { title: "Internal Audit", icon: FaClipboardList },
        {
          title: "Assistance in Preparation of Internal Audit Plan",
          icon: FaClipboardList,
        },
        { title: "Systems and Operations Audit", icon: FaCog },
        { title: "Due Diligence", icon: FaCog },
        { title: "Preparation of Standard Operating Procedures", icon: FaCog },
        {
          title:
            "Evaluation of Systems of Internal Controls in View of Best Practices",
          icon: FaCog,
        },
      ],
    },
    {
      title: "Accounting",
      icon: FaBook,
      description:
        "Comprehensive accounting services including reconciliation, financial reporting, and virtual CFO support.",
      subServices: [
        { title: "Reconciliations and Verifications", icon: FaCheckCircle },
        { title: "Fund Accounting", icon: FaMoneyBill },
        { title: "Bookkeeping and Accounting Services", icon: FaBook },
        { title: "Preparation of Financial Statements", icon: FaFileAlt },
        { title: "Fixed Asset Management", icon: FaBuilding },
        { title: "Preparation of Management Reports", icon: FaChartBar },
        { title: "Virtual CFO Services", icon: FaBriefcase },
        { title: "Accounting Advice and Technical Opinions", icon: FaBook },
        { title: "Preparation and Review of Accounting Manuals", icon: FaBook },
      ],
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  const handleScroll = () => {
    if (itemRef.current) {
      const top =
        itemRef.current.getBoundingClientRect().top <= -580 &&
        itemRef.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight * 0.85;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 px-4 md:px-8 lg:px-16 font-Raleway min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Services
          </h1>
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 mb-8 ${
                isVisible ? "fade-in-slide-up" : "" // Apply animation class based on isVisible state
              }`}
              ref={itemRef}
            >
              <div className="flex items-center mb-4">
                <service.icon className="text-3xl md:text-4xl mr-4 text-blue-500" />
                <h2 className="text-xl md:text-2xl font-semibold">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.subServices.map((subService, subIndex) => (
                  <div
                    key={subIndex}
                    className={`bg-gray-200 p-3 md:p-4 rounded-md flex items-center cursor-pointer ${
                      isVisible ? "fade-in-scale" : "" // Apply animation class based on isVisible state
                    }`}
                  >
                    <subService.icon className="text-lg md:text-xl text-gray-600" />
                    <span className="ml-2 text-sm md:text-base">
                      {subService.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
