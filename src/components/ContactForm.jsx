"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const decorativeSquares1 = Array(3).fill(null);
  const decorativeSquares2 = Array(3).fill(null);

  // Card Component
  const Card = ({ children }) => (
    <div className="bg-navy-900 text-white rounded-lg  overflow-hidden p-8">
      {children}
    </div>
  );

  return (
    <div className="relative w-full lg:mb-20 p-4  md:p-8">
      {/* Left decorative graphics */}
      <div className="absolute left-0 bottom-0 opacity-70">
        {decorativeSquares1.map((_, index) => (
          <motion.div
            key={`left-${index}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-16 h-16 border-2 border-emerald-400 absolute"
            style={{
              left: `${index * 20}px`,
              bottom: `${index * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Right decorative graphics */}
      <div className="absolute right-0 bottom-0 opacity-70">
        {decorativeSquares2.map((_, index) => (
          <motion.div
            key={`right-${index}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-16 h-16 border-2 border-orange-400 absolute"
            style={{
              right: `${index * 20}px`,
              bottom: `${index * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Main Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-blue-950 lg:p-10 rounded-lg"
      >
        <Card>
          <div className="grid md:grid-cols-2 gap-8 ">
            {/* Form Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-lg font-semibold mb-2 text-lime-400">CONTACT US</h2>
                <p className="text-gray-300 mb-6">Leave us a message</p>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name Last Name"
                      className="w-full p-3 rounded bg-navy-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 rounded bg-navy-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full p-3 rounded bg-navy-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-lime-500 text-navy-900 rounded font-medium hover:bg-lime-400 transition-colors"
                  >
                    Send
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Weekend UX</h3>
                <p className="text-gray-300">
                  B 37/3 Ground Floor Double Story
                  <br />
                  Ramesh Nagar, Near Raja Garden
                  <br />
                  Chowk Delhi- 110015
                </p>
                <p className="text-lime-400">+91 9599272754</p>
                <p className="text-lime-400">hello@info.com.ng</p>
              </motion.div>

              {/* Map */}
              <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.6 }}
  className="mt-6"
>
  <div className="w-full h-48 bg-gray-800 rounded overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d359.82909923525136!2d75.78695784269365!3d11.26198437117855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1739006216223!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</motion.div>

            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactForm;
