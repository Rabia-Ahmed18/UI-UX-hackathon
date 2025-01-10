import React from 'react';
import Image from 'next/image';
import blueSofa from '..//public/images/blueSofa.png';

const ProductCard= () => {
  return (
    <div className="relative bg-[#E7E4F8] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between mt-9 overflow-hidden">
      <Image src={blueSofa}
        
        height={550}
        width={558}
        alt="Blue Sofa"
      />
      <div className="px-6 py-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-9">
          Unique Features Of Latest & Trending Products
        </h1>
        <ul className="text-gray-500 mb-6">
          <li className="flex items-center mb-2">
            <span className="w-3 h-3 bg-pink-500 rounded-full inline-block mr-2 mb-4"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="flex items-center mb-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2 mb-4"></span>
            Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2 "></span>
            Arms, backs and seats are structurally reinforced
          </li>
        </ul>
        <div className='flex'>
        <button className="bg-pink-600 text-white px-6 py-2 rounded-none font-semifold mb-4 hover:bg-pink-500 ">
          Add To Cart
        </button>
       
             <p className="text-blue-800 p-2 ">
          B&B Italian Sofa
       &nbsp; 
          $32.00
        </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
