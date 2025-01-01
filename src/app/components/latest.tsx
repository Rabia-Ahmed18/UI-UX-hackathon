

import React from 'react';
import Link from 'next/link';
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
      <header className='flex border-b py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center gap-5 w-full'>
      
        <div id="collapseMenu"
          className='  max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        

          <ul
            className=' px-30 lg:flex lg:ml-14 lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
         
               <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='lg:hover:text-pink-500 text-blue-900 block font-semibold text-[15px]'>New Arrival</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='lg:hover:text-pink-500 text-blue-900 block font-semibold text-[15px]'>Best Seller</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='lg:hover:text-pink-500 text-blue-900 block font-semibold text-[15px]'>Featured</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='lg:hover:text-pink-500 text-blue-900 block font-semibold text-[15px]'>Special Offer</Link>
            </li>
           
          </ul>
        </div>

        

       




      </div>
    </header>
          <div className=" items-center  mb-12 space-x-4">    </div>      
      <div className="flex gap-8 items-center">
        
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
                src={L4}
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
            
            <div className="p-9 text-center w-full bg-gray-100 hover:bg-white ">
            <div className="relative w-64 h-64">
              <Image
                src={L2}
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


            
            <div className="p-9 text-center w-full bg-gray-100 hover:bg-white ">
            <div className="relative w-64 h-64">
              <Image
                src={L5}
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


            
            <div className="p-9 text-center w-full bg-gray-100 hover:bg-white ">
            <div className="relative w-64 h-64">
              <Image
                src={F4}
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
                src={F1}
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
          </div>
      
      </div>
        
    </div>
  );
}
