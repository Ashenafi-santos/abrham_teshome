import React from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiUsers,
  FiSettings,
  FiTarget,
  FiBookOpen,
  FiHeart,
} from "react-icons/fi";

const VisionSection = () => {
  return (
    <div className="bg-gray-100 py-12 font-Raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Our Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {visions.map((vision, index) => (
            <VisionCard key={index} vision={vision} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const visions = [
  {
    icon: <FiAward className="w-8 h-8 text-secondary mx-auto" />,
    title: "Leading Auditing and Consulting Firm",
    description:
      "To be one of the leading auditing and consulting firms in Ethiopia in terms of providing professional services, number of employees, and number of partners & representatives.",
  },
];

const VisionCard = ({ vision, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center justify-center mb-4">{vision.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
        {vision.title}
      </h3>
      <p className="text-gray-600 text-center">{vision.description}</p>
    </motion.div>
  );
};

export default VisionSection;
