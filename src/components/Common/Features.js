import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaComments, FaHeart } from 'react-icons/fa';

const featureVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const features = [
  {
    icon: <FaBrain size={60} />,
    title: "Emotional Intelligence",
    description: "Understand and improve your emotional intelligence with our tools.",
  },
  {
    icon: <FaComments size={60} />,
    title: "Multilingual AI Chatbot",
    description: "Get support from our friendly AI chatbot in multiple languages.",
  },
  {
    icon: <FaHeart size={60} />,
    title: "Personalized Recommendations",
    description: "Receive tailored suggestions to enhance your mental well-being.",
  },
];

const Features = () => {
  return (
    <div className="features-container bg-gradient-to-r from-purple-500 to-indigo-600 py-20">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
        Our Key Features
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card p-8 bg-white rounded-3xl text-center shadow-2xl transform transition-all duration-300"
            variants={featureVariant}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, translateY: -10 }}
            whileTap={{ scale: 0.95, translateY: 0 }}
          >
            <div className="text-indigo-600 mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
