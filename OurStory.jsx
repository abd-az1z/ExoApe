import React from "react";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">Our Story</h1>
        <p className="text-lg text-gray-400 mb-8">
          The story behind Exo Ape is one of exploration, creativity, and curiosity.
        </p>
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full shadow-lg"></div>
          <div className="absolute w-64 h-64 rounded-full border border-gray-700"></div>
          <div className="absolute w-96 h-96 rounded-full border border-gray-700 opacity-50"></div>
        </div>
        <a href="/" className="text-lg underline text-gray-300 hover:text-gray-100">Our Story</a>
      </div>

      <div className="mt-12 w-full border-t border-gray-700 pt-6 flex justify-around text-gray-400">
        <div className="flex flex-col items-center">
          <a href="/" className="hover:text-gray-200">Work</a>
          <a href="/" className="hover:text-gray-200">Studio</a>
          <a href="/" className="hover:text-gray-200">News</a>
          <a href="/" className="hover:text-gray-200">Contact</a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/" className="hover:text-gray-200">Behance</a>
          <a href="/" className="hover:text-gray-200">Dribbble</a>
          <a href="/" className="hover:text-gray-200">Twitter</a>
          <a href="/" className="hover:text-gray-200">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default OurStory;