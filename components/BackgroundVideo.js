import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="relative">
      <video autoPlay loop muted className="">
        <source src="https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default BackgroundVideo;