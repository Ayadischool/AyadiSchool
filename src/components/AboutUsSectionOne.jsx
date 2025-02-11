"use client";
"use client";
import React,{useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StudentRegistrationModal from "./StudentRegistrationModal"; // Import the modal

const AboutUsSectionOne = () => {
   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  
    // Open the modal
    const openModal = () => setIsModalOpen(true);
  
    // Close the modal
    const closeModal = () => setIsModalOpen(false);
  return (
    <section className="pt-16  px-8 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Circles */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 rounded-full border-2 border-lime-700"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full border-2 border-orange-500"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />


        {/* Floating Triangles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-b-[34.6px] border-b-lime-800 border-r-[20px] border-r-transparent"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-0 h-0 border-l-[15px] border-l-transparent border-b-[26px] border-b-orange-600 border-r-[15px] border-r-transparent"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

      
      </motion.div>

      {/* Main Content */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start relative">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 w-full md:w-full lg:max-w-xl"
        >
          <h1 className="text-[3.5rem] font-bold text-lime-500 leading-tight">
            About Us
          </h1>

          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-orange-400">We</span> Provide The Best
            <br />
            Opportunities To The
            <br />
            Students Around The Globe.
          </h2>

          <p className="text-gray-600 leading-relaxed w-full md:max-w-none">
            We offer the best and most trusted education, globally bloomed and
            locally at hand, exclusively for the children of expatriates in the
            GCC and around the world. Our online schooling platform combines
            flexibility with high standards, ensuring every child receives the
            personalized education they deserve. With lovely mentoring as our
            unique selling point, we focus on individualized educational
            planning, tailoring each student's learning journey. We integrate
            the theory of multiple intelligences to design a future where
            students are equipped to excel in a rapidly advancing,
            technology-driven world.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-500 hidden text-white px-8 py-3 rounded-md lg:flex items-center gap-2 text-lg hover:bg-lime-600 transition-colors w-fit"
            onClick={openModal} // Open the modal on clic
          >
            Join Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pb-10 flex flex-col gap-4 items-center"
        >
          <div className="relative w-full to-green-700 p-1">
            <div
              className="relative w-full aspect-[10/9] border-green-400 border-gradient-to-b from-green-200 border-4 overflow-hidden"
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            >
              <Image
                src="/HeroSectionImage.jpeg"
                alt="Modern Office Space"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                placeholder="blur"
                blurDataURL="/HeroSectionImage.jpeg"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-500 text-white px-8 py-3 rounded-md lg:hidden flex items-center gap-2 text-lg hover:bg-lime-600 transition-colors w-fit"
            onClick={openModal} // Open the modal on clic
          >
            Join Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
      <StudentRegistrationModal open={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default AboutUsSectionOne;