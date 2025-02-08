"use client";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Image Section */}
      <motion.div
        className="relative w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-[-30px] left-[-30px] bg-green-400 rounded-full w-20 h-20"></div>
        <div className="absolute bottom-[-30px] right-[-30px] bg-blue-500 rounded-full w-24 h-24"></div>
        <img
          src="HeroSectionImage.jpeg" 
          alt="Features"
          className="rounded-lg shadow-lg w-full max-w-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 mt-10 lg:mt-0 text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center lg:text-left">
          Our Features
        </h2>
        <p className="text-gray-500 text-center lg:text-left mt-2">
          Our teaching methodologies are designed to inspire curiosity, foster
          critical thinking, and encourage a love for learning
        </p>

        <h3 className="text-xl font-bold mt-6">
          We inspire <span className="text-green-500">curiosity</span>,
          <span className="text-green-500"> critical thinking</span>, and a
          <span className="text-green-500"> love</span>
        </h3>

        <div className="mt-6 space-y-4">
          {/* Feature Item */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-green-500 text-white rounded-full">
              🔲
            </div>
            <p className="text-gray-700">
              <strong>Subjects:</strong> English, Math, Science & Social
              Studies, plus Coding, Robotics, Spanish & French.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-green-500 text-white rounded-full">🔳</div>
            <p className="text-gray-700">
              <strong>Live Classes:</strong> Interactive sessions with expert
              teachers in real time.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-green-500 text-white rounded-full">👥</div>
            <p className="text-gray-700">
              <strong>Personal Mentoring:</strong> One-on-one guidance tailored
              to each student's needs.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
