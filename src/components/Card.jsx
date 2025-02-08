import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Card = ({ icon, title, description, bgColor }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`${bgColor} p-6 rounded-lg shadow-lg flex flex-col items-center text-center`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className={`text-xl font-bold mb-2 ${bgColor === 'bg-green-500' ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      <p className={`${bgColor === 'bg-green-500' ? 'text-white' : 'text-gray-600'}`}>
        {description}
      </p>
    </motion.div>
  );
};

export default Card;