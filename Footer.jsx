import React from "react";
import { FaRegCircle } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-black">
      <div className="max-w-screen-2xl mx-auto px-10 text-[#e0ccbb]  sm:px-20 ">
        <div className="font-light sm:font-semibold">
          <h1 className="text-7xl sm:font-normal sm:text-[11rem] mb-12">
            Our <br />
            Story
          </h1>
          <p className="text-lg sm:w-1/2 sm:mb-20 sm:text-4xl sm:leading-10 sm:font-light sm:tracking-wide mb-8">
            The story behind Exo Ape is one of exploration, creativity, and
            curiosity.
          </p>
          <div className="flex items-center mt-6  sm:hidden sm:mt-20 gap-2 ">
            <FaRegCircle className="w-[6px]" />
            <h1 className="border-b-[1px] text-lg border-[#e0ccbb] ">
              Our Story
            </h1>
          </div>
        </div>

        <div className="mt-12 w-full sm:text-2xl sm:font-light sm:gap-32 border-t pt-10 border-[#e0ccbb] flex opacity-75 gap-20 text-start">
          <div className="flex-col hidden sm:flex gap-3 justify-center">
            <a href="/" className="hover:text-gray-200">
              Willem II Singel 8
            </a>
            <a href="/" className="hover:text-gray-200">
              6041 HS, Roermond
            </a>
            <a href="/" className="hover:text-gray-200">
              The Netherlands
            </a>
            <a href="/" className="hover:text-gray-200">
              hello@exoape.com
            </a>
          </div>
          <div className="flex flex-col gap-3 justify-center ">
            <a href="/" className="hover:text-gray-200">
              Work
            </a>
            <a href="/" className="hover:text-gray-200">
              Studio
            </a>
            <a href="/" className="hover:text-gray-200">
              News
            </a>
            <a href="/" className="hover:text-gray-200">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <a href="/" className="hover:text-gray-200">
              Behance
            </a>
            <a href="/" className="hover:text-gray-200">
              Dribbble
            </a>
            <a href="/" className="hover:text-gray-200">
              Twitter
            </a>
            <a href="/" className="hover:text-gray-200">
              Instagram
            </a>
          </div>
          <div className="hidden sm:absolute sm:right-[15%] items-center mt-6 sm:flex sm:mt-20 gap-2 ">
            <FaRegCircle className="w-[6px]" />
            <h1 className="border-b-[1px] text-lg sm:tracking-wider border-[#e0ccbb] ">
              Our Story
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
