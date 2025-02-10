"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
            delay: 0.2
          }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="text-green-500 font-semibold mb-2">
            from Grade 1 to Grade 8
          </p>
          <h1 className="text-4xl  md:text-5xl bg font-bold text-blue-900 leading-tight">
            The Best and Most Trusted Education
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Globally bloomed and locally at hand, exclusively for the children of expatriates in the GCC and around the world.
          </p>
          <Link href="/enroll">
            <button className="mt-6 bg-green-500 a text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300">
              Enroll a Course
            </button>
          </Link>
        </motion.div>

        {/* Right Side - Image with Abstract Background */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
            delay: 0.3
          }}
          className="md:w-1/2 flex justify-center relative mt-10 md:mt-0  hidden md:block"  
        >
          {/* Abstract Background Shapes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
              delay: 0.5
            }}
            className="absolute -top-5 md:-top-10 -right-5 md:right-10 w-72 h-72 md:w-96 md:h-96 bg-orange-500 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
              delay: 0.6
            }}
            className="absolute -bottom-5 md:-bottom-10 -left-5 md:left-10 w-52 h-52 bg-blue-500 rounded-full blur-3xl"
          />

          {/* Main Image */}
          <Image
            src="/Hero.sv"
            alt="Graduation Student"
            width={600}
            height={500}
            className="relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;