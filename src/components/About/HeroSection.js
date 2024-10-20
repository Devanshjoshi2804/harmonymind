import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2020/12/15/59291-492700392_large.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black to-black opacity-70 flex items-center justify-center">
        <motion.div
          className="text-center text-white px-6 md:px-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-widest"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Our Mission
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl font-light mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Empowering individuals through emotional intelligence and holistic well-being.
          </motion.p>
          <motion.button
            className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-800 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
