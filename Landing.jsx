import { motion } from "framer-motion";
import { Expo, Power4 } from "gsap";
import React from "react";

const Landing = () => {
  return (
    <div className="w-full relative h-[150vh] sm:h-[260vh]">
      <div className="pic w-full h-full overflow-hidden ">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0 sm:px-20 text-white">
        <div className="h-full text max-w-screen-2xl mx-auto px-5 sm:px-10  ">
          <div className="para mt-[50vh] text-md sm:mt-[60vh] sm:text-3xl ">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p key={index} className="masker overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                      delay: index * 0.2,
                    }}
                    className="inline-block origin-left  "
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings overflow-hidden sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index) => {
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
                  className="inline-block origin-left font-light sm:text-[20vw] sm:leading-[12vw] mt-6 tracking-tighter  text-6xl "
                >
                  {item}
                </motion.span>
              );
            })}
          </div>
          <div className="para2 mt-32 text-whit sm:w-1/3 sm:text-xl ">
            <p>
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b-[1px] border-zinc-200 pb-[1px] mt-8 inline-block sm:text-xl "
              href=""
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
