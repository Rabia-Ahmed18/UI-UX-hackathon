

import React from 'react';
import Image from 'next/image';
import L1 from '../public/images/L1.png';
import L2 from '../public/images/L2.png';
import L4 from '../public/images/L4.png';
import L5 from '../public/images/L5.png';
import F4 from '../public/images/F4.png';
import F1 from '../public/images/F1.png';
export default function LatestProducts (){
  

  return (
    <div className="py-16 px-4 bg-white  ">
    
      <h2 className="text-center   text-4xl font-bold text-blue-900 mb-8">Latest Products</h2>

          <div className=" items-center  mb-12 space-x-4">    </div>
       
  
        
    

      
      <div className="flex gap-8 items-center    ">
        
          <div  className="bg-white  p-9 rounded-md w-80 h-auto   grid grid-rows-2 grid-flow-col gap-10 items-center">
      
          <div className="p-9 text-center bg-gray-100 w-full hover:bg-white">
            <div className="relative w-64 h-64">
              <Image
                src={L1}
                alt={"product"}
                width={270}
                height={361}
                className="w-full h-full object-cover rounded-md"
              />
              
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
            
            </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comfort Handy Craft</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-800 font-semibold">$42.00</span>
                <span className="line-through text-pink-500">$65.00</span>
              </div>
            </div>
            
            <div className="p-9 text-center w-full bg-gray-100 hover:bg-white">
            <div className="relative w-64 h-64">
              <Image
                src={L2}
                alt={"produc"}
                width={270}
                height={361}
                className="w-full h-full object-cover rounded-md"
              />
              
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
            
            </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comfort Handy Craft</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-800 font-semibold">$42.00</span>
                <span className="line-through text-pink-500">$65.00</span>
              </div>
            </div>
            
            <div className="p-9 text-center w-full bg-gray-100 hover:bg-white ">
            <div className="relative w-64 h-64">
              <Image
                src={F4}
                alt={"produc"}
                width={270}
                height={361}
                className="w-full h-full object-cover rounded-md"
              />
              
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
            
            </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comfort Handy Craft</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-800 font-semibold">$42.00</span>
                <span className="line-through text-pink-500">$65.00</span>
              </div>
            </div>


            
            <div className="p-9 text-center w-full bg-gray-100 hover:bg-white ">
            <div className="relative w-64 h-64">
              <Image
                src={L4}
                alt={"produc"}
                width={270}
                height={361}
                className="w-full h-full object-cover rounded-md"
              />
              
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
            
            </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comfort Handy Craft</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-800 font-semibold">$42.00</span>
                <span className="line-through text-pink-500">$65.00</span>
              </div>
            </div>


            
            <div className="p-9 text-center w-full bg-gray-100 hover:bg-white ">
            <div className="relative w-64 h-64">
              <Image
                src={L5}
                alt={"produc"}
                width={270}
                height={361}
                className="w-full h-full object-cover rounded-md"
              />
              
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
            
            </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comfort Handy Craft</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-800 font-semibold">$42.00</span>
                <span className="line-through text-pink-500">$65.00</span>
              </div>
            </div>
                  
      
                  <div className="p-9 text-center w-full bg-gray-100 hover:bg-white">
            <div className="relative w-64 h-64">
              <Image
                src={F1}
                alt={"produc"}
                width={270}
                height={361}
                className="w-full h-full object-cover rounded-md"
              />
              
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
            
            </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comfort Handy Craft</h3>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-800 font-semibold">$42.00</span>
                <span className="line-through text-pink-500">$65.00</span>
              </div>
            </div>
          </div>
      
      </div>
        
    </div>
  );
}
