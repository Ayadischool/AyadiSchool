'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaLaptopCode, FaBrain } from 'react-icons/fa';
import Card from './Card';

const cardsData = [
  {
    icon: <FaChalkboardTeacher className="text-green-500 text-4xl" />,
    title: "PERSONAL MENTORING",
    description: "Each student gets a personal mentor for tailored learning and support.",
    bgColor: "bg-white",
  },
  {
    icon: <FaLaptopCode className="text-white text-4xl" />,
    title: "MODERN TECHNOLOGY",
    description: "Integrated into lessons to enhance learning and prepare students for a tech-driven world.",
    bgColor: "bg-green-500",
  },
  {
    icon: <FaBrain className="text-green-500 text-4xl" />,
    title: "HOLISTIC DEVELOPMENT",
    description: "Focusing on academic success and emotional, social, and intellectual growth.",
    bgColor: "bg-white",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: -20,
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

const WhyChooseUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#0A2342] text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          variants={titleVariants}
          className="text-3xl font-bold"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p 
          variants={titleVariants}
          className="mt-2 text-gray-300"
        >
          Integrated into lessons to enhance learning and prepare students for a tech-driven world.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {cardsData.slice(0, 2).map((card, index) => (
          <Card key={index} {...card} />
        ))}
        <div className="md:col-span-2 flex justify-center lg:col-span-1">
          <Card {...cardsData[2]} />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;