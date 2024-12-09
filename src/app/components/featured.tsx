import React from "react";
import Image from "next/image";
import F1 from '../public/images/F1.png';
import F2 from '../public/images/F2.png';
import F3 from '../public/images/F3.png';
import F4 from '../public/images/F4.png';


        

const ProductCard = () => {
  return (
    <>
    <div className="h-[42] w-[367]   p-9 ">
             <h2 className="text-center  text-4xl font-bold text-blue-900 mb-8   ">Featured Products</h2>
             </div>
             <div  className="flex">
    <div className=" hover:shadow-pink-300 rounded-lg max-w-sm m-5 overflow-hidden shadow-lg bg-white  h-[270px] w-[361px]">
     
     
     
      <Image
            src={F4}
        alt="Cantilever chair"
        width={178}
        height={178}
      
      />
      <div className="text-center">
        <div className="font-bold text-xl mb-2 text-pink-500">Cantilever chair</div>
        <p className="text-gray-700 text-base">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base mt-2">
          $42.00
        </p>
      </div>
    </div>
    <div className="max-w-sm  rounded-lg overflow-hidden shadow-lg hover:shadow-pink-300 p-7 m-5  h-[270px] w-[361px]">
      <Image
            src={F3}
        alt="Cantilever chair"
        width={130}
        height={150}
      />
      <div className="text-center">
        <div className="font-bold text-xl mb-2   text-pink-500">Cantilever chair</div>
        <p className="text-gray-700 text-base">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base mt-2">
          $42.00
        </p>
      </div>
    </div>
    <div className="max-w-sm hover:shadow-pink-300 m-5 rounded-lg  overflow-hidden shadow-lg  bg-white  h-[270px] w-[361px]">
      <Image
            src={F2}
        alt="Cantilever chair"
        width={175}
        height={175}
      />
      <div className="text-center">
        <div className="font-bold text-xl mb-2 text-pink-500">Cantilever chair</div>
        <p className="text-gray-700 text-base">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base mt-2">
          $42.00
        </p>
      </div>
    </div>
    <div className="max-w-sm hover:shadow-pink-300 rounded-lg overflow-hidden shadow-lg  m-5  h-[270px] w-[361px] ">
      <Image
            src={F1}
        alt="Cantilever chair"
        width={216}
        height={151}
      />
      <div className="text-center">
        <div className="font-bold text-xl mb-2 text-pink-500">Cantilever chair</div>
        <p className="text-gray-700 text-base">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base mt-2">
          $42.00
        </p>
      </div>
    </div>

 
    </div>

    </>
  );
};

export default ProductCard;

    
