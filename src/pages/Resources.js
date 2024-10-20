import React from 'react';
import { motion } from 'framer-motion';


const resources = [
  {
    title: "Understanding Emotional Intelligence",
    description: "A comprehensive guide to understanding and improving your emotional intelligence.",
    category: "Guides",
    image: "https://picsum.photos/202"
  },
  {
    title: "Mindfulness Practices",
    description: "Explore various mindfulness techniques to enhance your mental well-being.",
    category: "Articles",
    image: "https://picsum.photos/201"
  },
  {
    title: "Emotional Health in the Workplace",
    description: "Strategies to maintain emotional health in a professional setting.",
    category: "Workplace Podcast",
    image: "https://picsum.photos/200"
  },
  // Add more resources as needed
];

const ResourceCard = ({ resource }) => (
  <motion.div
    className="resource-card p-6 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
    whileHover={{ scale: 1.05 }}
  >
    <div className="bg-cover bg-center h-40 mb-4 rounded-t-lg" style={{ backgroundImage: `url(${resource.image})` }} />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
    <p className="text-gray-600 mb-4">{resource.description}</p>
    {resource.category === 'Workplace Podcast' ? (
      <a href="/workplace-podcasts" className="text-indigo-500 font-medium">
        {resource.category}
      </a>
    ) : resource.category === 'Articles' ? (
      <a href="/articles" className="text-indigo-500 font-medium">
        {resource.category}
      </a>
    ) : resource.category === 'Guides' ? (
      <a href="/guides" className="text-indigo-500 font-medium">
        {resource.category}
      </a>
    ) : <span className="text-indigo-500 font-medium">{resource.category}</span>
    }

  </motion.div>
);

const Resources = () => {
  return (
    <div className="resources-page bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;