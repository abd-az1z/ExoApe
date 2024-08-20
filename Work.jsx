import React from "react";
import videoSrc from "../assets/dee0a4f7.mp4";
import video2Src from "../assets/4ce94964.mp4";
import video3Src from "../assets/1f289d51.mp4";
import video4Src from "../assets/5ac47112.mp4";
import { FaRegCircle } from "react-icons/fa6";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-10 sm:px-20 py-20 ">
        <div className="featured flex gap-2 sm:hidden">
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
          <h4 className="text-lg">Feautured Projects</h4>
        </div>
        <h1 className="text-7xl  overflow-hidden my-10 tracking-tight font-medium mt-6 sm:px-32 sm:text-[18vw] sm:mt-10 sm:font-normal ">
          <motion.span
            initial={{ rotate: 90, y: "45%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
            className="origin-left inline-block "
          >
            Work
          </motion.span>
        </h1>
        <p className="text-lg font-medium sm:hidden ">
          Highlights of cases that we <br /> passionately built with
          forward-thinking <br /> clients and friends over the years.
        </p>
        <div className="videos-wrapper sm:px-24">
          <div className="w-full sm:flex sm:gap-24">
            <div className="video-wrapper sm:w-[60%]">
              <div className="w-full h-[55vh] mt-10 sm:mt-0  overflow-hidden sm:bg-slate-300 sm:h-[100vh] ">
                <video
                  data-scroll
                  data-scroll-speed="-.4"
                  className="w-full h-full sm:h-screen object-cover"
                  autoPlay
                  muted
                  loop
                  playsinline
                  src={videoSrc}
                ></video>
              </div>
              <div className="my-4 text-lg sm:text-sm ">
                <h2 className=" font-semibold">Columbia Pictures</h2>
                <h2 className=" font-light  ">
                  Celebrating a Century of Cinema
                </h2>
              </div>
            </div>
            <div className="sm:mt-14 sm:w-[50%] ">
              <div className="">
                <div className="featured hidden sm:gap-2 sm:flex  ">
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon w-4 sm:w-4 hidden sm:flex sm:content-end"
                    data-v-669b4a84=""
                  >
                    <path
                      d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                      fill="currentColor"
                      data-v-669b4a84=""
                    ></path>
                  </svg>
                  <h4 className="sm:text-lg">Featured Projects</h4>
                </div>
                <p className="sm:text-3xl sm:mt-20 ">
                  Highlights of cases that we <br /> passionately built with
                  forward-thinking clients and friends over <br />
                  the years.
                </p>
                <div className="sm:w-full">
                  <div className="sm:w-full sm:h-[70vh] sm:mt-[30vh]  overflow-hidden">
                    <video
                      data-scroll
                      data-scroll-speed="-.4"
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsinline
                      src={video4Src}
                    ></video>
                  </div>
                  <div className="my-4 textlg sm:text-sm">
                    <h2 className=" font-semibold ">Rino & Pelle - </h2>
                    <h2 className=" font-light  ">Effortless chic lifestyle</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:flex sm:mt-20 sm:gap-24">
            <div className="video-wrapper sm:w-[60%]">
              <div className="w-full h-[55vh] mt-10 sm:mt-0  overflow-hidden sm:bg-slate-300 sm:h-[100vh] ">
                <video
                  data-scroll
                  data-scroll-speed="-.4"
                  className="w-full h-full sm:h-screen object-cover"
                  autoPlay
                  muted
                  loop
                  playsinline
                  src={video2Src}
                ></video>
              </div>
              <div className="my-4 text-lg sm:text-sm ">
                <h2 className=" font-semibold">Aebele Interiors</h2>
                <h2 className=" font-light  ">luxurious design experience</h2>
              </div>
            </div>
            <div className="sm:mt-14 sm:w-[50%] ">
              <div className="">
                <div className="sm:w-full">
                  <div className="sm:w-full sm:h-[70vh] sm:mt-[30vh]  overflow-hidden">
                    <video
                      data-scroll
                      data-scroll-speed="-.4"
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsinline
                      src={video3Src}
                    ></video>
                  </div>
                  <div className="my-4 textlg sm:text-sm">
                    <h2 className=" font-semibold ">Pixelflakes - </h2>
                    <h2 className=" font-light  ">
                      Architechural marketing agnecy
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center sm:mt-20 gap-2 justify-center">
          <FaRegCircle className="w-2" />
          <h1 className="border-b-[1px]  border-black ">Browse all work</h1>
        </div>
      </div>
    </div>
  );
};

export default Work;
