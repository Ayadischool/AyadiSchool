"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaRegUser, FaUsersCog, FaClipboardCheck, FaMoneyBillAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const EnrollmentSteps = () => {
  const steps = [
    {
      title: 'Register For Admission',
      description: 'Visit our website and complete the admission registration form',
      icon: <FaRegUser size={50} />,
    },
    {
      title: 'Admission Counseling',
      description: 'Our team will contact you to schedule admission counseling.',
      icon: <FaUsersCog size={50} />,
    },
    {
      title: 'Wait For The Result',
      description: 'After the counseling session, you will receive your admission result',
      icon: <FaClipboardCheck size={50} />,
    },
    {
      title: 'Pay The Admission Fee',
      description: 'Once admitted, proceed with the payment of the admission fee',
      icon: <FaMoneyBillAlt size={50} />,
    },
    {
      title: 'Confirm Your Seat',
      description: 'Payment confirms your seat—ready to start at AYADI GLOCAL SCHOOL!',
      icon: <FaCheckCircle size={50} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Enroll Now for a Bright Future
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          Taking the first step toward a brighter future is easy at AYADI GLOCAL SCHOOL. Follow these simple steps to begin your journey with us.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#1e2875] text-white rounded-lg p-6 flex flex-col items-center text-center shadow-lg transform transition-transform duration-500 hover:scale-105"
              variants={stepVariants}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: (index * 0.1) + 0.2, ease: "easeOut" }}
                className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4"
              >
                <div className="text-[#1e2875] w-12 h-12">
                  {step.icon}
                </div>
              </motion.div>

              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{step.description}</p>

              {/* Next step icon */}
              {index < steps.length - 1 && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.2 }}
    className="mt-4 text-white hidden lg:block" // Add hidden lg:block
  >
    <FaArrowRight size={12} />
  </motion.div>
)}

            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          >
            Click To Enroll Your's!
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default EnrollmentSteps;
