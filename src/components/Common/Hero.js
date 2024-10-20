import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Hero = () => {
  return (
    <div className="hero-container h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to HarmonyMind
      </motion.h1>
      <motion.p
        className="text-xl text-white mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Your journey to holistic wellbeing starts here.
      </motion.p>
      <div className="w-full h-64 mt-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <Sphere visible args={[1, 32, 32]} scale={2.5}>
            <meshStandardMaterial attach="material" color="orange" />
          </Sphere>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
