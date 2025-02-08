"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProgramCard = ({ title, description, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ y: -5 }}
      className="bg-[#1e2875] rounded-lg p-8 text-white flex flex-col items-center text-center"
    >
      {/* Icon Circle */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ 
          duration: 0.4,
          delay: (index * 0.1) + 0.2,
          ease: "easeOut"
        }}
        className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6"
      >
        <div className="text-[#1e2875] w-12 h-12">
          {icon}
        </div>
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 mb-6">{description}</p>

      {/* View Details Button */}
      <Link href={`/programs/${title.toLowerCase()}`}>
        <button className="bg-[#4CAF50] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#45a049] transition-colors">
          View Details
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </button>
      </Link>
    </motion.div>
  );
};

export default ProgramCard;