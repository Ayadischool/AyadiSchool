"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProgramCard from './ProgramCard';

const programsData = [
  {
    title: "Coding",
    description: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    )
  },
  {
    title: "Robotics",
    description: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M8 12h8m-4-4v8"/>
      </svg>
    )
  },
  {
    title: "Spanish",
    description: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8m-4-4v8"/>
      </svg>
    )
  },
  {
    title: "French",
    description: "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 3v18M15 3v18"/>
      </svg>
    )
  }
];

const PopularPrograms = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2875] mb-4">
            Our Popular Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            we offer a rigorous curriculum designed to promote academic excellence and personal growth
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((program, index) => (
            <ProgramCard
              key={index}
              index={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PopularPrograms;