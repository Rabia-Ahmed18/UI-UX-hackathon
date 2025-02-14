

"use client";

import Image from "next/image";
import Link from "next/link";
import lampImage from '../public/images/lampImage.png';
import sofa1 from '../public/images/sofa1.png';


function HeroSection() {
  
  return (
    <section className="relative bg-[#E7E4F8] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className=" w-[500px]  absolute top-[-350px] left-[-40px] z-10">
          <Image
            src={lampImage}
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-pink-600 font-medium font-Josefin_Sans">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-4xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2 flex">
        New Furniture Collection Trends in 2020
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-600 text-white text-sm font-medium py-3 px-6 rounded-none mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
        >Shop Now
          
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center  relative">
        <div className=" relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src={sofa1}
            alt="Furniture Chair"
            width={689}
            height={706}
            className="object-contain "
          />
        </div>
       
      </div>

    
      
      <button
        
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        
      </button>
    
    </section>
  );
}

export default HeroSection;
