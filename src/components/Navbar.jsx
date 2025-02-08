"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 md:px-12 py-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/AyadiLogo.PNG" alt="Ayadi Glocal School" width={150} height={50} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-blue-900 font-medium">
          <Link href="/">Home</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>

        {/* Call Button */}
        <div className="hidden md:block">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition duration-300">
            Get a Call Back
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col space-y-4 mt-4 bg-white p-4 text-center rounded-lg"
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2">
              Home
            </Link>
            <Link href="/programs" onClick={() => setMenuOpen(false)} className="block py-2">
              Programs
            </Link>
            <Link href="/about-us" onClick={() => setMenuOpen(false)} className="block py-2">
              About Us
            </Link>
            <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="block py-2">
              Contact Us
            </Link>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition duration-300"
            >
              Get a Call Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
