"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaGraduationCap, FaChevronDown } from "react-icons/fa";

const GradeModal = ({ grade, isOpen, toggleModal }) => {
  const subjectsData = {
    1: ["Math", "English", "Social Studies", "Science"],
    2: ["Math", "English", "Social Studies", "Science", "Computer Science"],
    3: ["Math", "English", "Social Studies", "Science", "Hindi"],
    4: ["Math", "English", "Social Studies", "Science", "Hindi", "General Knowledge"],
    5: ["Math", "English", "Social Studies", "Science", "Hindi"],
    6: ["Math", "English", "Social Studies", "Science", "Hindi", "Sanskrit"],
    7: ["Math", "English", "Social Studies", "Science", "Hindi", "Sanskrit"],
    8: ["Math", "English", "Social Studies", "Science", "Hindi", "Sanskrit", "History"],
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6  mb-6 transition-all duration-300 transform  hover:shadow-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleModal(grade)}
      >
        <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-900">
          <FaBook /> {`GRADE ${grade}`}
        </h3>
        <span className="text-2xl text-blue-900">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="list-disc pl-6 text-gray-700">
            {subjectsData[grade].map((subject, index) => (
              <motion.li
                key={index}
                className="transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                {subject}
              </motion.li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
              <FaGraduationCap /> Enroll Now!
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const CoursePrograms = () => {
  const grades = [1, 2, 3, 4, 5, 6, 7, 8];
  const [openGrade, setOpenGrade] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleModal = (grade) => {
    setOpenGrade(openGrade === grade ? null : grade);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="py-5 pb-10 lg:px-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-sm inline-block bg-blue-900 font-bold text-center text-white px-3 py-1 rounded-md mb-8">
          Grade 1 to 8
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First column (first 4 items) */}
          <div className="space-y-6">
            {grades.slice(0, 4).map((grade) => (
              <GradeModal
                key={grade}
                grade={grade}
                isOpen={openGrade === grade}
                toggleModal={toggleModal}
              />
            ))}
          </div>

          {/* Second column (next 4 items) */}
          <div className={`space-y-6 ${showMore ? "block" : "hidden"} md:block lg:block`}>
            {grades.slice(4, 8).map((grade) => (
              <GradeModal
                key={grade}
                grade={grade}
                isOpen={openGrade === grade}
                toggleModal={toggleModal}
              />
            ))}
          </div>
        </div>

        {/* "Show More" button for mobile */}
        <div className="text-center mt-6 md:hidden">
          <button
            onClick={handleShowMore}
            className="flex items-center  justify-center bg-blue-900 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-800"
          >
            <span className="text-sm">{showMore ? "Show Less" : "Show More"}</span>
            <FaChevronDown className={`ml-2 ${showMore ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursePrograms;
