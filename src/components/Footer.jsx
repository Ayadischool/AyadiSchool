"use client";

    import React from 'react';
    import { motion } from 'framer-motion';
    import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
    
    const Footer = () => {
      const containerAnimation = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      };
    
      const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        },
      };
    
      const linkAnimation = {
        initial: { x: 0 },
        hover: { 
          x: 10,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
          }
        }
      };
    
      const sections = [
        {
          title: 'Company Info',
          links: ['About Us', 'Career', 'We are hiring', 'Blog'],
        },
        {
          title: 'Legal',
          links: ['About Us', 'Career', 'We are hiring', 'Blog'],
        },
        {
          title: 'Features',
          links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
        },
        {
          title: 'Resources',
          links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
        },
      ];
    
      const contactInfo = [
        { icon: <Phone className="w-5 h-5" />, text: "(480) 555-0103" },
        { icon: <MapPin className="w-5 h-5" />, text: "4517 Washington Ave. Manchester, Kentucky 39495" },
        { icon: <Mail className="w-5 h-5" />, text: "debra.holt@example.com" },
      ];
    
      return (
        <footer className="bg-white py-12 px-4 border-t">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
            >
              {/* Logo Section */}
              <motion.div 
                variants={itemAnimation}
                whileHover={{ scale: 1.05 }}
                className="md:col-span-1"
              >
                <img 
                      src="/AyadiLogo.png"
                  alt="Company Logo" 
                  className="h-12 w-auto mb-4"
                />
              </motion.div>
    
              {/* Navigation Sections */}
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  variants={itemAnimation}
                  className="space-y-4"
                >
                  <motion.h3 
                    className="font-semibold text-gray-900"
                    whileHover={{ scale: 1.05 }}
                  >
                    {section.title}
                  </motion.h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <motion.li 
                        key={link}
                        variants={linkAnimation}
                        whileHover="hover"
                      >
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
    
            {/* Get In Touch Section - Now Inline */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="mt-12 pt-8 border-t"
            >
              <motion.h3 
                variants={itemAnimation}
                className="font-semibold text-gray-900 mb-6 text-center"
              >
                Get In Touch
              </motion.h3>
              <motion.div 
                variants={itemAnimation}
                className="flex flex-wrap justify-center gap-8 items-center"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <motion.span
                      whileHover={{ rotate: 15 }}
                      className="text-gray-400"
                    >
                      {info.icon}
                    </motion.span>
                    <span>{info.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
    
            {/* Bottom Section */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center"
            >
              <motion.p 
                variants={itemAnimation}
                className="text-gray-600 text-sm mb-4 md:mb-0"
              >
                Made by Minhaj &c, AyadSchool All Right Reserved
              </motion.p>
              <motion.div 
                variants={itemAnimation}
                className="flex space-x-4"
              >
                {[Facebook, Linkedin, Twitter, Mail].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-gray-600"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </footer>
      );
    };
    
    export default Footer;