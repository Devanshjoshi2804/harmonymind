// src/components/About/VisionValuesSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import QuizSection from './QuizSection';
import InteractiveInfographic from './InteractiveInfographic';
import ParallaxStory from './ParallaxStory';


      
    
    
    
  

const iconVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const VisionValuesSection = () => {
  return (
    <div className="vision-values-section py-20 bg-gradient-to-r from-indigo-100 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Parallax speed={-10}>
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-12 text-indigo-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Our Vision & Values
          </motion.h2>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <motion.div
            className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            variants={iconVariant}
            initial="hidden"
            whileHover="visible"
          >
            <motion.svg
  className="w-16 h-16 mx-auto mb-6 text-indigo-600"
  fill="currentColor"
  viewBox="0 0 24 24"
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.8 }}
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</motion.svg>

            <h3 className="text-2xl font-semibold mb-4">Empathy</h3>
            <p className="text-gray-600">
              We believe in understanding and sharing the feelings of others.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            variants={iconVariant}
            initial="hidden"
            whileHover="visible"
          >
            <motion.svg
  className="w-16 h-16 mx-auto mb-6 text-indigo-600"
  fill="currentColor"
  viewBox="0 0 24 24"
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.8 }}
>
  <path d="M12 2C7.03 2 2.99 6.03 2.99 11 2.99 16.5 7.16 21 12 21 16.84 21 20.99 16.5 20.99 11 20.99 6.03 16.96 2 12 2zM12 4c3.86 0 7 3.14 7 7 0 3.86-3.14 7-7 7-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7zm0 1c-1.38 0-2.5 1.12-2.5 2.5S10.62 10 12 10s2.5-1.12 2.5-2.5S13.38 5 12 5zm-1 9c-1.68 0-3.05-1.11-3.5-2.67l1.16-1.25c.37.75 1.11 1.31 2.34 1.31 1.22 0 1.97-.56 2.34-1.31l1.16 1.25C16.05 12.89 14.68 14 13 14zm1-4c-1.11 0-2-.9-2-2s.89-2 2-2 2 .9 2 2-.89 2-2 2z"/>
</motion.svg>

            <h3 className="text-2xl font-semibold mb-4">Mindfulness</h3>
            <p className="text-gray-600">
              Staying present and fully engaging with the here and now.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            variants={iconVariant}
            initial="hidden"
            whileHover="visible"
          >
           <motion.svg
  className="w-16 h-16 mx-auto mb-6 text-indigo-600"
  fill="currentColor"
  viewBox="0 0 24 24"
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.8 }}
>
  <path d="M11.25 22.5h1.5v-1.25h-1.5V22.5zm5.5-5.63c.2-.51.3-1.05.3-1.61V11.5c0-1.5-1.22-2.73-2.73-2.73h-.91v1.46h.91c.7 0 1.27.57 1.27 1.27v3.75H9.82v-2.29c0-.7-.57-1.27-1.27-1.27h-.91v-1.46h.91C10.3 8.77 11.5 10 11.5 11.5v4.76c0 .56.1 1.1.3 1.61H6.5v-4.5h-1.5V21H8.5v-2h7v2h3.5v-4.5h-1.5v4.12z"/>
</motion.svg>

            <h3 className="text-2xl font-semibold mb-4">Growth</h3>
            <p className="text-gray-600">
              We strive for continuous improvement and self-discovery.
            </p>
          </motion.div>
        </div>
        <div className="mt-20">
        <ParallaxStory />
        <InteractiveInfographic />
      </div>
        <div className="mt-20">
          <Parallax speed={5}>
            <QuizSection />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default VisionValuesSection;
