import React from 'react';
import { motion } from 'framer-motion';

const branchVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const InteractiveInfographic = () => {
  return (
    <div className="interactive-infographic mt-24">
      <div className="relative w-full h-96 flex justify-center">
        {/* Trunk */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 bg-gray-700 h-64 rounded-lg"></div>

        {/* Branches */}
        <motion.div
          className="absolute left-1/4 top-16 w-56 bg-indigo-600 p-6 rounded-lg shadow-xl transform -translate-x-1/2 -translate-y-1/2"
          variants={branchVariant}
          initial="hidden"
          whileHover="visible"
        >
          <h4 className="text-xl font-bold text-white">Empathy</h4>
          <p className="text-white mt-4">
            We believe in understanding and sharing the feelings of others.
          </p>
        </motion.div>

        <motion.div
          className="absolute left-3/4 top-32 w-56 bg-indigo-600 p-6 rounded-lg shadow-xl transform -translate-x-1/2 -translate-y-1/2"
          variants={branchVariant}
          initial="hidden"
          whileHover="visible"
        >
          <h4 className="text-xl font-bold text-white">Mindfulness</h4>
          <p className="text-white mt-4">
            Staying present and fully engaging with the here and now.
          </p>
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-48 w-56 bg-indigo-600 p-6 rounded-lg shadow-xl transform -translate-x-1/2 -translate-y-1/2"
          variants={branchVariant}
          initial="hidden"
          whileHover="visible"
        >
          <h4 className="text-xl font-bold text-white">Growth</h4>
          <p className="text-white mt-4">
            We strive for continuous improvement and self-discovery.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveInfographic;
