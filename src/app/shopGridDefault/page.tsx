"use client";

import { useState } from 'react';
import F1 from '../public/images/F1.png';
import Image from 'next/image';

export default function ShopGridDefault (){




 


      const [perPage, setPerPage] = useState(10);
      const [sortBy, setSortBy] = useState('bestMatch');
    
      const handlePerPageChange = (event:any) => {
        setPerPage(parseInt(event.target.value, 10));
      };
    
      const handleSortByChange = (event:any) => {
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
        
  
 
 <div className="bg-white shadow-md rounded-lg  w-[276px] h-[363px] overflow-hidden grid-cols-3">
      <div className="relative h-48">
        <Image
          src={F1}
          height={201}
          width={201}
          alt="Product Image"
          
          
        />
      </div>
      <div className="flex items-center ml-20 mt-2">
          <span className="bg-orange-600 text-white rounded-full px-2 py-1 text-xs">
                  </span>
          <span className="ml-2 bg-pink-500 text-white rounded-full px-2 py-1 text-xs">
        
          </span>
          <span className="ml-2 bg-purple-500 text-white rounded-full px-2 py-1 text-xs">
                  </span>
        </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">Ultrices mauris sit</h2>
        <div className="flex items-center mt-2">
          <span className="text-lg  text-blue-800">$26.00</span>
          <span className="ml-2 text-pink-500 line-through">$42.00</span>
        </div>
      
      </div>

</div>
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





</div>




</>
      )
    }
    
    