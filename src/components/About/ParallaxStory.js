import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxStory = () => {
  return (
    <div className="parallax-story mt-20">
      <Parallax speed={-5}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900">Our Journey</h2>
          <p className="mt-4 text-lg text-gray-700">
            From humble beginnings to a platform focused on holistic well-being and emotional intelligence.
          </p>
        </div>
      </Parallax>

      <Parallax speed={-3}>
        <div className="story-section bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4">Chapter 1: The Vision</h3>
          <p className="text-gray-600">
            Our vision began with the idea of creating a platform that brings emotional intelligence and well-being to the forefront.
          </p>
        </div>
      </Parallax>

      <Parallax speed={-1}>
        <div className="story-section bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4">Chapter 2: Building the Foundations</h3>
          <p className="text-gray-600">
            We started with a small team, dedicated to making a difference through innovative technology and human-centric design.
          </p>
        </div>
      </Parallax>

      <Parallax speed={0}>
        <div className="story-section bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4">Chapter 3: Growing with You</h3>
          <p className="text-gray-600">
            With the support of our community, we've grown into a comprehensive platform that offers tools and resources for personal growth.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxStory;
