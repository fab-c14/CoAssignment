import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-[90vh]  w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-20 lg:py-32 font-sans">
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-6"
      >
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-900 leading-tight">
          <span className="block">Welcome to Pdf My Code</span>
          Convert code to beautiful PDFs
        </h1>
        <p className="text-gray-600 text-lg max-w-lg">
          Instantly generate styled PDFs from your code with professional formatting, color themes, and one-click export.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-medium px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
        >
          Generate Now
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-center lg:justify-end"
      >
        <img
          src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
          alt="Hero illustration"
          className="w-4/5 max-w-md lg:max-w-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
