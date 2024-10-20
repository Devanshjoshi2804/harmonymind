// src/components/About/TeamSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    bio: "John is the visionary behind HarmonyMind.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    bio: "Jane leads the technology team.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  // Add more team members here
];

const TeamSection = () => {
  return (
    <div className="team-section py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={member.image} alt={member.name} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="mt-4 text-gray-600">{member.bio}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
