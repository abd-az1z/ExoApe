import { Linear } from "gsap";
import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Images = () => {
  const firstimg = useRef(null);
  const firstvid = useRef(null);
  const secondimg = useRef(null);
  const secondvid = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ 
      scrollTrigger:{
        trigger: parent.current,
        start: "0 90%",
        scrub: 1
      }
     });
    tl.to(firstimg.current,{
      x: "200%",
      ease: Linear,
      duration: 4,
      scale: 1.3
    }, 'anime')
    .to(firstvid.current,{
      x: "-200%",
      ease: Linear,
      duration: 4,
      scale: 1.3
    }, 'anime')
    .to(secondimg.current,{
      x: "-200%",
      ease: Linear,
      duration: 4,
      scale: 1.3
    }, 'anime')
    .to(secondvid.current,{
      x: "200%",
      ease: Linear,
      duration: 4,
      scale: 1.3
    }, 'anime')
  });

  return (
    <div ref={parent} className="w-full h-[70vh] flex items-center justify-center bg-white sm:h-[100vh]">
      <div className="w-[40%] h-1/2 relative sm:w-[60%] sm:h-[80%]">
        {/* First Image */}
        <div
          ref={firstimg}
          className="absolute w-20 sm:z-[998] h-[40%] top-6 -right-1/3 sm:w-[24vh] sm:h-[40%] sm:-top-20 sm:right-[13%]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>

        {/* First Video */}
        <div
          ref={firstvid}
          className="absolute sm:z-[998] w-32 h-20  top-16 -left-[60%] sm:w-60 sm:h-36 sm:top-20 sm:left-[4%]"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>

        {/* Second Image */}
        <div
          ref={secondimg}
          className="absolute sm:z-[998] w-36 h-24 -bottom-16 -left-[70%] sm:w-[40vh] sm:h-[24vh] sm:-bottom-32 sm:left-[0%]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>

        {/* Second Video */}
        <div
          ref={secondvid}
          className="absolute sm:z-[998] w-36 h-56 -bottom-1/2 -right-[70%] sm:w-[30vh] sm:h-[40vh] sm:-bottom-[20%] sm:right-[7%]"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>

        {/* Main Image */}
        <img
          className="w-full h-full object-cover sm:w-[40%] sm:absolute sm:top-1/2  sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 "
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
