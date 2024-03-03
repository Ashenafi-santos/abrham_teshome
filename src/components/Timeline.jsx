import React, { useRef, useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const TimelineItem = ({ title, subtitle, date }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  const handleScroll = () => {
    const top = itemRef.current.getBoundingClientRect().top;
    const isVisible = top < window.innerHeight * 0.85;
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={itemRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center mb-2">
        <FaBriefcase className="mr-3 w-6 h-6  text-secondary" />
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="max-w-3xl mx-auto  p-6">
      <div className="border-l-2 border-gray-400 pl-4">
        <TimelineItem
          title="Audit Manager"
          subtitle="External Audit Firm"
          date="2000 - 2005"
        />
        <TimelineItem title="IFRS Consultant" subtitle="" date="2005 - 2010" />
        <TimelineItem
          title="Audit Senior"
          subtitle="External Audit Firm"
          date="2010 - 2015"
        />
        <TimelineItem
          title="Expert"
          subtitle="Due Diligence Work, Privatization Activities"
          date="2015 - 2018"
        />
        <TimelineItem
          title="Accounting and Tax Consultant"
          subtitle="Various Private Companies"
          date="2018 - Present"
        />
      </div>
    </div>
  );
};

export default Timeline;
