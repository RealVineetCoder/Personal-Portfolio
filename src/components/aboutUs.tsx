"use client";
import Lottie from "lottie-react";
import animationData from "../assets/About.json";
import  MarqueeDemo  from "@/components/skillAnimate";


const aboutUs = () => {
  return (
    <div className=" w-full">
      <div className="flex justify-center h-[70%] pb-[10%]">
        <div className="w-[40%] flex items-center">
          <Lottie animationData={animationData} />
        </div>

        <div className="w-[60%] pl-[10%] flex flex-col justify-center">
          <h1 className="text-[48px]">About Us</h1>
          <p className="text-[16px] text-[#A1A1AA]">
            Hello, wonderful folks! 🎉 I&apos;m a spirited MCA student who discovered
            <br />
            the magic of coding back in Class 6. Over the years, I&apos;ve delved
            <br />
            deep into various aspects of programming and development, honing my
            <br />
            skills through self-directed learning. As a self-taught developer, I
            <br />
            take immense pride in the fact that I&apos;ve never purchased any courses
            <br />
            to enhance my programming skills. Instead, I firmly believe in the
            <br />
            art of exploration and learning through the vast sea of online
            <br />
            resources – there&apos;s something uniquely rewarding about the journey
            <br />
            of self-discovery in coding.
            <br />
            <br />
            I&apos;m currently focusing on getting really good at Next.js. Every day,<br />
            I make a commitment to code, and honestly, it&apos;s super fun! 🚀 The<br />
            more I explore Next.js, the more I appreciate its powerful features<br />
            and capabilities. From server-side rendering to static site<br />
            generation, Next.js has opened up a new realm of possibilities for<br />
            me.
          </p>
        </div>
      </div>
      <div className="pb-[5%]"><MarqueeDemo  /></div>
      
    </div>
  );
};

export default aboutUs;
