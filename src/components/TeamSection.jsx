"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "KALAM SIDHEEQUE",
      role: "Academic Director Nawazin",
      image: "/HeroSectionImage.jpeg",
      darkBg: true
    },
    {
      id: 2,
      name: "KALAM SIDHEEQUE",
      role: "Academic Director Nawazin",
      image: "/HeroSectionImage.jpeg",
      darkBg: false
    },
    {
      id: 3,
      name: "KALAM SIDHEEQUE",
      role: "Academic Director Nawazin",
      image: "/HeroSectionImage.jpeg",
      darkBg: true
    },
    {
      id: 4,
      name: "KALAM SIDHEEQUE",
      role: "Academic Director Nawazin",
      image: "/HeroSectionImage.jpeg",
      darkBg: false
    },
    {
      id: 5,
      name: "KALAM SIDHEEQUE",
      role: "Academic Director Nawazin",
      image: "/HeroSectionImage.jpeg",
      darkBg: true
    },
    {
      id: 6,
      name: "KALAM SIDHEEQUE",
      role: "Academic Director Nawazin",
      image: "/HeroSectionImage.jpeg",
      darkBg: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const SocialIcons = ({ darkBg }) => (
    <div className="flex gap-4 mt-4">
        
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className={`${darkBg ? 'text-lime-500' : 'text-lime-500'} hover:text-lime-400`}
      >
        <Facebook size={18} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className={`${darkBg ? 'text-lime-500' : 'text-lime-500'} hover:text-lime-400`}
      >
        <Linkedin size={18} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className={`${darkBg ? 'text-lime-500' : 'text-lime-500'} hover:text-lime-400`}
      >
        <Twitter size={18} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className={`${darkBg ? 'text-lime-500' : 'text-lime-500'} hover:text-lime-400`}
      >
        <Mail size={18} />
      </motion.a>
    </div>
  );

  return (
    <section className="pb-10 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-lime-500 mb-4">Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our success is driven by a passionate team of professionals dedicated to
          innovation, education, and excellence. Each member brings unique
          expertise, working together to shape a brighter future
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={itemVariants}
            className={`rounded-xl overflow-hidden ${
              member.darkBg ? 'bg-blue-900' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="p-4">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-lg object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className={`text-xl font-bold ${
                member.darkBg ? 'text-white' : 'text-gray-900'
              }`}>
                {member.name}
              </h3>
              <p className={`${
                member.darkBg ? 'text-white' : 'text-gray-600'
              } mt-1`}>
                {member.role}
              </p>
              <SocialIcons darkBg={member.darkBg} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;