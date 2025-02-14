"use client";

import { useState } from 'react';
import grayChair from '../public/images/grayChair.png';
import whiteChair from '../public/images/whiteChair.png';
import pinkSofa from '../public/images/pinkSofa.png';
import bag from '../public/images/bag.png'
import watch1 from '../public/images/watch1.png';
import brownSofa from '../public/images/brownSofa.png';

import watch2 from '../public/images/watch2.png';
import watch3 from '../public/images/watch3.png';
import blackHeadphone from '../public/images/blackHeadphone.png';
import redHeadphone from '../public/images/redHeadphone.png';
import camera from '../public/images/camera.png';
import Image from 'next/image';

export default function ShopGridDefault (){




 


      const [perPage, setPerPage] = useState(10);
      const [sortBy, setSortBy] = useState('bestMatch');
    
      const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setPerPage(parseInt(event.target.value, 10));
      };
    
      const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSortBy(event.target.value);
      };


    
      return (
        <>
     <div className="w-full h-[286px] bg-[#E7E4F8] ">
 <div className="w-[500px] h-[62px] py-20 px-20 ">
  <h1 className="font-bold text-4xl justify-center mb-3  ">Shop Grid Default</h1>
 

  <ul className="flex items-center justify-center space-x-4 font-[sans-serif]">
      <li className="text-black text-base cursor-pointer">
        Home
      </li>
      <li className="text-black text-lg">.</li>
      <li className="text-black text-base cursor-pointer">
        Pages
      </li>
      <li className="text-black text-lg">.</li>
      <li className=" text-base  cursor-pointer hover:text-pink-500">
        Shop grid Default
      </li>
    </ul>






 </div>  

 </div>


        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Ecommerce Accessories & Fashion Item
          </h1>
         
    
          <div className="flex items-center mt-4 justify-end">
            <label htmlFor="perPage" className="mr-2 text-customBlue">
              Per Page:
            </label>
            <select
              id="perPage"
              value={perPage}
              onChange={handlePerPageChange}
              className="border rounded px-2 py-1"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
    
            <div className="ml-4">
              <label htmlFor="sortBy" className="mr-2 text-customBlue">
                Sort By:
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={handleSortByChange}
                className="border rounded px-2 py-1 className='text-gray-500'"
              >
                <option value="bestMatch" >Best Match</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
    
            <div className="ml-4">
              <label htmlFor="view" className="mr-2 text-customBlue">
                View:
              </label>
              <div className="flex items-center"></div>
              </div>

              </div>
        
  
 
   

      <div className="min-h-screen  flex items-center justify-center  grid grid-cols-4 grid-flow-rows gap-4">
  

  <div className="flex flex-col items-center bg-white w-[270px] h-[363px]  rounded-md p-4 ">
        <Image
          src={grayChair}
          width={201}
          height={200}
          alt="Chair"
          className="object-cover  bg-gray-50 p-9   w-[270px] h-[280px]"
        />
       
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
   
      </div>
  <div className="flex flex-col items-center bg-white p-4 rounded-lg w-[270px] h-[363px] ">
  <Image
          src={brownSofa}
          alt="Chair"
          width={169}
          height={169}
          className=" object-cover p-9 bg-gray-50 w-[270px] h-[280px] "
        />
       
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  <div className="flex flex-col items-center bg-white p-4 rounded-lg  w-[270px] h-[363px]">
  <Image
          src={whiteChair}
          alt="Chair"
          width={201}
          height={201}
          className="object-cover bg-gray-50 p-9 w-[270px] h-[280px]"
        />
       
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  <div className="flex flex-col items-center bg-white p-4 rounded-lg w-[270px] h-[363px]">
  <Image
          src={bag}
          alt="Chair"
          width={188}
          height={188}
          className=" object-cover bg-gray-50 p-9 w-[270px] h-[280px]"
        />
       
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
      <div className="flex flex-col items-center  bg-white p-5 w-[270px] h-[363px]">
  <Image
          src={watch1}
          alt="watch"
          width={128}
          height={139}
          className=" object-cover bg-gray-100 p-14 w-[270px] h-[280px] "
        />
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  <div className="flex flex-col items-center bg-white  p-5  w-[270px] h-[363px] ">
  <Image
          src={watch2}
          alt="watch"
          width={154}
          height={158}
          className=" object-cover bg-gray-100 p-9 w-[270px] h-[280px] "
        />
       
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin  line-through ml-2">$42.00</span>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white p-7   w-[270px] h-[363px]">
  <Image
          src={redHeadphone}
          alt="redheadphone"
          // width={114}
          // height={144}
          className=" object-cover bg-gray-100  p-14 w-[270px] h-[280px] "
        />
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  <div className="flex flex-col items-center bg-white p-4  w-[270px] h-[363px]">
  <Image
          src={pinkSofa}
          alt="Chair"
          width={167}
          height={167}
          className=" object-cover bg-gray-100  p-9 w-[270px] h-[280px] "
        />
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  <div className="flex flex-col items-center bg-white p-4 rounded-lg w-[270px] h-[363px]">
  <Image
          src={watch3}
          alt="watch"
          width={175}
          height={151}
          className=" object-cover bg-gray-100 p-9 w-[270px] h-[280px]"
        />
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>

  <div className="flex flex-col items-center bg-white p-4 rounded-lg w-[270px] h-[369px]">
        <Image
          src={camera}
          alt="camera"
          width={169}
          height={158}
          className=" object-cover bg-gray-100 p-9 w-[270px] h-[280px]  "
        />
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  <div className="flex flex-col items-center bg-white p-4 rounded-lg w-[270px] h-[363px]">
        <Image
          src={blackHeadphone}
          alt="headphone"
          width={168}
          height={168}
          className=" object-cover bg-gray-100 p-9 w-[270px] h-[280px]  "
        />
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  <div className="flex flex-col items-center bg-white p-4 rounded-lg w-[270px] h-[363px] ">
  <Image
          src={bag}
          alt="Chair"
          width={188}
          height={188}
       
          className=" object-cover bg-gray-100 p-9 w-[270px] h-[280px] "
        />
        <h2 className="text-blue-900 text-lg font-semibold mt-4">Vel elit euismod</h2>
        <div className="flex space-x-2 mt-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-blue-900 text-sm font-thin">$26.00</span>
          <span className="text-pink-500 text-sm font-thin line-through ml-2">$42.00</span>
        </div>
      </div>
  
  
      </div>




</div>

</>
      )
    }
    
    