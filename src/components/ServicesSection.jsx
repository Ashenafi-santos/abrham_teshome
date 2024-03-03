import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-12 font-Raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Audit and Assurance",
    imageUrl: "https://source.unsplash.com/random/800x600/?audit",
    description:
      "We offer comprehensive audit and assurance services to help you maintain compliance, improve efficiency, and mitigate risks.",
  },
  {
    title: "Strategy and Innovation",
    imageUrl: "https://source.unsplash.com/random/800x600/?strategy",
    description:
      "Our strategy and innovation services help businesses develop forward-thinking strategies and implement innovative solutions to drive growth and success.",
  },
  {
    title: "Tax and Business Support",
    imageUrl: "https://source.unsplash.com/random/800x600/?tax",
    description:
      "We provide expert tax and business support services to help you navigate complex tax regulations and optimize your financial operations.",
  },
  {
    title: "IT Services",
    imageUrl: "https://source.unsplash.com/random/800x600/?it",
    description:
      "Our IT services include consulting, implementation, and support to help businesses leverage technology for improved efficiency and performance.",
  },
  {
    title: "Consultancy Advisory and Outsourcing Services",
    imageUrl: "https://source.unsplash.com/random/800x600/?consultancy",
    description:
      "Our consultancy advisory and outsourcing services cover a wide range of areas including financial management, HR, and operational support to help businesses achieve their goals.",
  },
  {
    title: "Accounting",
    imageUrl: "https://source.unsplash.com/random/800x600/?accounting",
    description:
      "We offer comprehensive accounting services to help businesses maintain accurate financial records and make informed financial decisions.",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 text-center">{service.description}</p>
        <div className="flex justify-center mt-4">
          <Link
            to={"/services"}
            className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
