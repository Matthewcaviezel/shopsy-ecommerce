import React from 'react';
import Banner from '../../assets/website/orange pattern.jpg';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-black"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-16 px-6">
        <div className="flex flex-col items-center text-center gap-8 max-w-xl mx-auto">
          <h1
            className="text-2xl sm:text-4xl font-semibold text-gray-500"
          >
            Gets Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full max-w-md p-3 bg-white rounded-full mx-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;