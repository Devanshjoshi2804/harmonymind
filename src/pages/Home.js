import React, { useState } from 'react';
import Hero from '../components/Common/Hero';
import Features from '../components/Common/Features';
import Testimonials from '../components/Common/Testimonials';
import CallToAction from '../components/Common/CallToAction';
import NearbyPsychiatrists from '../components/Common/PsychiatristSearch';


const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <NearbyPsychiatrists />
      <Testimonials />
      <CallToAction />
      
      
    </div>
  );
};

export default Home;
