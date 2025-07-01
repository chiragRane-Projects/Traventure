"use client"

import React from "react";
import Image from "next/image";
import HeroImage from "@/public/heroImage.jpg";
import { Button } from "./ui/button";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <Image
          src={HeroImage}
          alt="A beautiful view of a clean empty road"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Explore The World Around You
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl">
            Take a break from the stress of everyday life, plan trips and explore your favourite destinations.
          </p>
          
        </div>
      </section>

      <div className="">
        <SearchBar/>
      </div>
    </>
  );
};

export default Hero;