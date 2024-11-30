import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#F2F0F1] w-full rounded-xl">
        {/* Text Content */}
        <div className="flex flex-col items-start px-10 gap-5 py-8 sm:px-[40px] sm:py-[30px]">
          <p className="text-[36px] font-bold leading-tight font-bebas sm:text-[64px] sm:w-[577px] sm:leading-[60px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className="text-sm sm:text-base font-light sm:w-[577px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="w-[210px] h-[52px] py-4 px-12 rounded-full bg-black text-white sm:w-[300px]">
            Shop Now
          </button>
        </div>
        {/* Banner Image */}
        <img
          className="h-[350px] w-[350px] sm:h-[500px] sm:w-[500px]"
          src={assets.banner}
          alt="Hero Banner"
        />
      </div>

      {/* Brands Section */}
      {/* <div className="w-full xs:h-[100px] bg-black my-4 rounded-xl flex justify-evenly items-center sm:h-[122px]">
        <img src={assets.gucci} alt="Gucci Logo" className="h-[50px] xs:h-[23px] sm:h-auto" />
        <img src={assets.calvin} alt="Calvin Klein Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
        <img src={assets.prada} alt="Prada Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
        <img src={assets.zara} alt="Zara Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
        <img src={assets.versace} alt="Versace Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
      </div> */}
       <div className="w-full xs:h-[100px] bg-black my-4 rounded-xl flex justify-evenly items-center sm:h-[90px] overflow-hidden">
        <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
          <img src={assets.gucci} alt="Gucci Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.calvin} alt="Calvin Klein Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.prada} alt="Prada Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.zara} alt="Zara Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.versace} alt="Versace Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          {/* Repeat logos to ensure continuous scrolling */}
          <img src={assets.gucci} alt="Gucci Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.calvin} alt="Calvin Klein Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.prada} alt="Prada Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.zara} alt="Zara Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
          <img src={assets.versace} alt="Versace Logo" className="h-[50px] sm:h-auto xs:h-[23px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
