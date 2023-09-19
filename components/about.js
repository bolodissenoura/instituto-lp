import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import AboutText from '../components/aboutText';

const about = () => {
  return (
    <div className="relative">
      <BackgroundVideo />
      <AboutText />
    </div>
  );
};

export default about;