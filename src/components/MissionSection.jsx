import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiSettings, FiTarget, FiBookOpen, FiHeart } from 'react-icons/fi';

const MissionSection = () => {
  return (
    <div className="bg-gray-100 py-12 font-Raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Our Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <MissionCard key={index} mission={mission} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const missions = [
  {
    icon: <FiAward className="w-8 h-8 text-indigo-600 mx-auto" />,
    title: 'Community Engagement and Contribution',
    description:
      'Engaging with and giving back to the community by providing valuable services, participating in community initiatives, and supporting local causes.'
  },
  {
    icon: <FiSettings className="w-8 h-8 text-indigo-600 mx-auto" />,
    title: 'Ethical and Regulatory Compliance',
    description:
      'Upholding ethical standards and ensuring compliance with relevant regulations and standards in the provision of assurance and tax advisory services.'
  },
  {
    icon: <FiTarget className="w-8 h-8 text-indigo-600 mx-auto" />,
    title: 'Providing high-quality and professional services',
    description:
      'Ensuring that the services offered to clients and the community meet high standards of quality and professionalism.'
  },
  {
    icon: <FiBookOpen className="w-8 h-8 text-indigo-600 mx-auto" />,
    title: 'Finding new ways to serve clients',
    description:
      'Continuously seeking innovative approaches and solutions to better meet the needs of clients and improve service delivery.'
  },
  {
    icon: <FiUsers className="w-8 h-8 text-indigo-600 mx-auto" />,
    title: 'Prioritizing training and recruitment',
    description:
      'Investing in the development of staff members through training and recruiting competent specialists in emerging areas to enhance service capabilities.'
  },
  {
    icon: <FiHeart className="w-8 h-8 text-indigo-600 mx-auto" />,
    title: 'Promoting Diversity and Inclusion',
    description:
      'Fostering an environment that celebrates diversity and promotes inclusivity, both within the organization and in our interactions with clients and partners.'
  }
];

const MissionCard = ({ mission, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 "
    >
      <div className="flex items-center justify-center mb-4">{mission.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{mission.title}</h3>
      <p className="text-gray-600 text-center">{mission.description}</p>
    </motion.div>
  );
};

export default MissionSection;
