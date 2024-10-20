import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MentalHealthSurvey = () => {
  const [responses, setResponses] = useState(Array(10).fill(0));
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const calculateScore = () => {
    const totalScore = responses.reduce((acc, curr) => acc + curr, 0);
    setScore(totalScore);
    setSubmitted(true);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-500 to-purple-500 relative overflow-hidden">
      <motion.div 
        className="relative z-10 p-8 bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-auto backdrop-filter backdrop-blur-md bg-opacity-80"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-extrabold text-center text-gray-900 mb-8"
        >
          Mental Health Survey
        </motion.h2>

        <p className="text-center text-lg text-gray-700 mb-8">
          For Students Aged 18-24
        </p>

        <form>
          <div className="grid grid-cols-2 gap-8">
            {[
              "In the past two weeks, how often have you felt sad or unhappy?",
              "How often have you felt discouraged about the future?",
              "How often have you felt like a failure or overly critical of yourself?",
              "In the past two weeks, how often have you found it hard to enjoy things that you usually do?",
              "How often have you experienced physical symptoms of anxiety (e.g., heart pounding, dizziness, difficulty breathing)?",
              "How often have you felt nervous or anxious without any clear reason?",
              "How often have you had trouble falling asleep or staying asleep?",
              "How often have you felt that your hands or body were trembling or shaky?",
              "How often have you felt tired or had low energy in the past two weeks?",
              "How often have you found it difficult to relax or calm yourself when stressed?",
            ].map((question, index) => (
              <motion.div 
                key={index} 
                className="question-container"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="font-semibold text-lg text-gray-800">{question}</p>
                <div className="flex flex-col mt-2 space-y-2">
                  {["Not at all", "Occasionally", "Most of the time", "All the time"].map((option, i) => (
                    <label key={i} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name={`question${index}`}
                        value={i}
                        checked={responses[index] === i}
                        onChange={() => handleChange(index, i)}
                        className="form-radio h-5 w-5 text-purple-600 focus:ring-purple-500 transition ease-in-out duration-200"
                      />
                      <span className="ml-3 text-gray-600">{option}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={calculateScore}
            className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:bg-gradient-to-l transition-all duration-300 ease-in-out transform hover:scale-105 font-bold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>

        {submitted && (
          <motion.div 
            className="score-container"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Score: {score}</h3>
            <p className="score-message">
              {score <= 4 && "Low scores indicate minimal or no mental health issues."}
              {score >= 5 && score <= 14 && "Moderate scores suggest mild to moderate depression, anxiety, or stress."}
              {score >= 15 && "High scores point to more severe mental health issues that may require attention or intervention."}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MentalHealthSurvey;
