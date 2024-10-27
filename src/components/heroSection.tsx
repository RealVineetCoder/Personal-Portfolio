"use client"
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";

const heroSection = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div>
          <p className="text-[16px] pb-2 font-Secondary">Hi, my name is</p>
          <h1 className="text-[48px] font-Primary">Vineet Kumar</h1>
          <h1 className="animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text font-heading text-[1.6rem]   tracking-wider text-transparent dark:from-purple-400   dark:via-indigo-400 dark:to-pink-400 sm:text-5xl mt-2 pb-1 font-semibold">I build things for the web.</h1>
        </div>

        <div className="pt-4">
          <p>
            Hey everyone! 🎉 I&apos;m a cheerful MCA student who fell in love
            with coding in Class
          </p>
          <p>
            11. Currently exploring the world of web
            development. 🚀 It&apos;s a fun journey, and
          </p>
          <p>
            I can&apos;t wait to see what&apos;s next! 🌟
            #CodingEnthusiast
          </p>
        </div>
      </div>
      <Lottie animationData={animationData} className="pb-[20px]"/>

    </div>
  );
};

export default heroSection;
