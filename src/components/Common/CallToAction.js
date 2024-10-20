import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleSurveyClick = () => {
    navigate('/survey'); // Navigate to the survey page
  };

  return (
    <div className="cta-container bg-indigo-600 py-16 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
      <p className="text-lg mb-8">Join HarmonyMind today and take the first step towards a better you.</p>
      <motion.button
        onClick={handleSurveyClick} // Handle button click
        className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 hover:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Fill Out Mental Health Survey
      </motion.button>
    </div>
  );
};

export default CallToAction;
