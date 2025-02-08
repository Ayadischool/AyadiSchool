"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animation
import { FaRegGrinBeam, FaBrain, FaHandHoldingHeart } from 'react-icons/fa'; // Example icons, replace with your own icons

const CurriculumHighlights = () => {
  const highlights = [
    {
      title: 'Stress-Free Assessment',
      description: 'Our approach to assessment emphasizes progress over pressure, encouraging a positive and productive learning environment',
      icon: <FaRegGrinBeam size={40} />, // Smaller icon size
      color: 'bg-green-500', // This is the green color for the first card
    },
    {
      title: 'Positive Psychology',
      description: 'We incorporate principles of positive psychology to build resilience, emotional intelligence, and well-being',
      icon: <FaBrain size={40} />, // Smaller icon size
      color: 'bg-white', // This will make the second card white
    },
    {
      title: 'Mindfulness Practices',
      description: 'Students engage in daily meditation, affirmations, and gratitude journaling, promoting mental clarity, focus, and emotional balance',
      icon: <FaHandHoldingHeart size={40} />, // Smaller icon size
      color: 'bg-white', // This will make the third card white
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">We follow a CBSE curriculum</h2>
        <p className="text-center text-gray-600 mb-8">
          Fully aligned with the latest National Education Policy (NEP), ensuring a future-focused and well-rounded education
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className={`rounded-lg shadow-md p-6 text-center ${highlight.color === 'bg-green-500' ? 'bg-green-500 text-white' : 'bg-white text-gray-800 border-2 border-black'}`} // Reduced padding
              variants={cardVariants}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -5 }}
                className={`rounded-lg p-6 flex flex-col items-center text-center ${highlight.color === 'bg-green-500' ? 'bg-green-500 text-white' : 'bg-white text-gray-800'}`} // Adjusted padding
              >
                {/* Icon Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: (index * 0.1) + 0.2,
                    ease: "easeOut",
                  }}
                  className="bg-white rounded-full p-3 w-16 h-16 flex items-center border-2 border-black justify-center mb-6" // Smaller circle
                >
                  <div className="text-[#57df31] w-12 h-12">
                    {highlight.icon}
                  </div>
                </motion.div>

                <h3 className="text-lg font-medium mb-2">{highlight.title}</h3> {/* Smaller title font */}
                <p className="text-gray-600 text-sm">{highlight.description}</p> {/* Smaller description font */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CurriculumHighlights;
