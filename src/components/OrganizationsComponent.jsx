import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaIndustry,
  FaBuilding,
  FaLeaf,
  FaExchangeAlt,
  FaLandmark,
  FaStore,
  FaMoneyBill,
  FaHome,
  FaMusic,
  FaUsers,
  FaHotel,
  FaStoreAlt,
  FaHandshake,
  FaChurch,
} from "react-icons/fa";

const OrganizationCard = ({ icon, name }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible && cardRef.current) {
      const top = cardRef.current.getBoundingClientRect().top;
      const bottom = cardRef.current.getBoundingClientRect().bottom;
      const isVisible = top < window.innerHeight * 0.85 && bottom > 0;
      setIsVisible(isVisible);
    }
  }, [isVisible]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-md text-secondary shadow-md p-4 flex items-center transition duration-300 ease-in-out transform hover:shadow-lg cursor-pointer"
    >
      {icon}
      <p className="ml-2">{name}</p>
    </motion.div>
  );
};

const OrganizationsComponent = () => {
  const organizationData = [
    {
      icon: <FaIndustry className="text-4xl mr-2" />,
      name: "Manufacturing companies",
    },
    {
      icon: <FaBuilding className="text-4xl mr-2" />,
      name: "Construction companies",
    },
    {
      icon: <FaLeaf className="text-4xl mr-2" />,
      name: "Agricultural businesses",
    },
    {
      icon: <FaExchangeAlt className="text-4xl mr-2" />,
      name: "Import and export companies",
    },
    {
      icon: <FaLandmark className="text-4xl mr-2" />,
      name: "Government organizations",
    },
    {
      icon: <FaStore className="text-4xl mr-2" />,
      name: "Merchandising businesses and distributors",
    },
    {
      icon: <FaMoneyBill className="text-4xl mr-2" />,
      name: "Financial institutions",
    },
    { icon: <FaHome className="text-4xl mr-2" />, name: "Real estates" },
    {
      icon: <FaMusic className="text-4xl mr-2" />,
      name: "Entertainment and event organizing entities",
    },
    {
      icon: <FaUsers className="text-4xl mr-2" />,
      name: "Non-governmental organizations",
    },
    { icon: <FaHotel className="text-4xl mr-2" />, name: "Hotels" },
    { icon: <FaStoreAlt className="text-4xl mr-2" />, name: "Factories" },
    {
      icon: <FaHandshake className="text-4xl mr-2" />,
      name: "Consultancy business organizations",
    },
    { icon: <FaChurch className="text-4xl mr-2" />, name: "Churches" },
    { icon: <FaUsers className="text-4xl mr-2" />, name: "Other businesses" },
  ];

  return (
    <div className="flex flex-col items-center justify-center font-Raleway bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-5 text-primary">
        Types of Organizations Worked With
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {organizationData.map((organization, index) => (
          <OrganizationCard
            key={index}
            icon={organization.icon}
            name={organization.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationsComponent;
