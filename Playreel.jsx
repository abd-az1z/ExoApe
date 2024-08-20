import { Power4 } from "gsap";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Playreel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: true,
      },
    });
    tl.to(
      videodiv.current,
      {
        width: "105%",
        height: "105%",
        ease: Power4.easeInOut,
        duration: 3,
        transformOrigin: "50% 50%",
      },
      "sameTimeAnime"
    )
      .to(
        play.current,
        {
          x: "-200%",
          ease: Power4,
          duration: 2,
          scale: 1.5,
        },
        "sameTimeAnime"
      )
      .to(
        reel.current,
        {
          x: "200%",
          ease: Power4,
          duration: 2,
          scale: 1.5,
        },
        "sameTimeAnime"
      );
  });
  return (
    <div
      ref={parent}
      className="bg-black w-full h-screen overflow-hidden text-white relative"
    >
      <div
        ref={videodiv}
        className="w-32 sm:w-96 aspect-video overflow-hidden  absolute top-[49%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <video
          className="w-full h-full scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          autoPlay
          muted
          loop
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>

      <div className="overlay absolute w-full h-full flex flex-col justify-between py-20">
        <div className="w-full flex font-light items-center justify-center gap-3 ">
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
          <h3>Work in motion</h3>
        </div>
        <h1 className="w-full justify-center flex gap-20 sm:gap-52 items-center">
          <div ref={play} className="text-4xl sm:text-9xl font-light ">
            Play
          </div>
          <div ref={reel} className="text-4xl sm:text-9xl font-light ">
            Reel
          </div>
        </h1>
        <p className="opacity-70 text-center px-10 font-extralight ">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default Playreel;
