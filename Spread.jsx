import { motion } from "framer-motion";
import React from "react";
import { FaRegCircle } from "react-icons/fa6";

const Spread = () => {
  return (
    <div className="w-full bg-white py-10 ">
      <div className="max-w-screen-2xl mt-20 mx-auto px-10 text-black sm:px-20 ">
        <div className="flex items-center gap-3 justify-center">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="font-light sm:font-medium sm:text-xl">In the media</h3>
        </div>
        <div className=" overflow-hidden mt-16 text-center ">
          {["Spread", "the news"].map((item, index) => {
            return (
              <motion.span
                key={index}
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1,
                  delay: 1 + index * 0.2,
                }}
                className="inline-block origin-left text-7xl sm:mr-5 font-light sm:text-[12rem] sm:font-normal tracking-tight text-center  "
              >
                {item}
              </motion.span>
            );
          })}
          <p className="w-2/3 sm:text-4xl sm:w-[50%] mx-auto text-sm tracking-normal mt-20 font-normal">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
        </div>
        <div className="flex items-center mt-6  sm:mt-20 sm:gap-4 gap-2 justify-center">
          <FaRegCircle className="w-[6px] sm:w-[8px]" />
          <h1 className="border-b-[1px] sm:text-2xl text-xs border-black ">
            Browse all work
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Spread;
