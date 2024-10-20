import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "HarmonyMind has completely transformed the way I manage my emotions. The chatbot is so supportive and understanding.",
    author: "Rahul",
  },
  {
    quote: "The real-time assessments helped me gain a deeper understanding of my emotional state. Highly recommend!",
    author: "Suresh",
  },
  {
    quote: "I love the personalized recommendations! They’ve made a real difference in my daily life.",
    author: "Mukesh",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container bg-gradient-to-r from-purple-600 to-blue-500 py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="testimonial-carousel"
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card p-6 text-center">
              <FaQuoteLeft size={30} className="mx-auto mb-4 text-indigo-300" />
              <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
              <p className="text-lg font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
