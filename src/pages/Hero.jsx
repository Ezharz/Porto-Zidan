import React from "react";
import GroupImage from "../assets/Group.svg";
import QuoteIcon from "../assets/quote-up.svg";
import Vector1 from "../assets/Vector.svg";

const Hero = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden" id="home">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Vector Hello */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:-translate-x-[-110%] translate-y-[-70%] sm:-translate-y-[50%] translate-x-[70%]">
          <img
            src={Vector1}
            alt="Vector Decorative"
            className="w-full h-auto"
          />
        </div>

        {/* Hello */}
        <div className="flex justify-center relative z-10 mt-8 sm:mt-[40px] mb-6">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 sm:px-6 py-1.5 sm:py-2.5 text-sm sm:text-base font-medium text-primary-color">
            Hello!
          </span>
        </div>

        {/* Judul */}
        <div className="text-center z-10 relative mt-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            I&apos;m <span className="text-primary-color">Zidan</span>,<br />
            <span className="text-gray-900">Product Designer</span>
            {/* Vector Judul */}
            <div className="absolute top-100 left-1/4 rotate-180 transform -translate-x-1/2 translate-y-[70%] md:translate-y-[-40%] md:translate-x-[-340%] lg:translate-x-[-150%] xl:translate-x-[50%] sm:translate-y-[-50%] sm:translate-x-[-50%]">
              <img
                src={Vector1}
                alt="Vector Decorative"
                className="w-full h-auto"
              />
            </div>
          </h1>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative mt-8 sm:mt-12">
          {/* Bagian Kiri */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img
              src={QuoteIcon}
              alt="Quote Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 mb-4"
            />
            <p className="text-gray-600 font-semibold text-base sm:text-lg max-w-[270px] leading-relaxed text-center md:text-left">
              I help bring your concept to life with outstanding design, ensuring
              your website&apos;s success.
            </p>
          </div>

          {/* Bagian Tengah - Gambar*/}
          <div className="relative flex flex-col items-center justify-center  md:my-0">
            <div className="text-center mb-4 md:hidden">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900 block">
                +1 Years
              </span>
              <span className="text-base text-gray-600">Experience</span>
            </div>

            <img
              src={GroupImage}
              alt="Zidan Product Designer"
            />
          </div>

          {/* Bagian Kanan */}
          <div className="hidden md:block text-center md:text-left ml-[80px]">
            <div className="md:ml-[80px]">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900 block">
                +1 Years
              </span>
              <span className="text-base text-gray-600">Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
