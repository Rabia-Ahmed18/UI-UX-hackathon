import React from "react";
import Image from "next/image";
import F1 from '../public/images/F1.png';
import F2 from '../public/images/F2.png';
import F3 from '../public/images/F3.png';
import F4 from '../public/images/F4.png';


        

const ProductCard = () => {
  return (
    <>
    <div className="h-[42] w-[367]   p-9 mt-20 ">
             <h2 className="text-center  text-4xl font-bold text-blue-900 mb-8   ">Featured Products</h2>
             </div>

             <div  className="flex">

    <div className="   hover:shadow-pink-300  max-w-sm m-5 overflow-hidden shadow-lg bg-white  ">    
      <div className="  bg-gray-100 h-[270px] w-[361px] place-content-center">
      <Image
            src={F4}
        alt="Cantilever chair"
        width={200}
        height={200}

      />
      </div>
      <div className="text-center hover:bg-blue-700 group ">
        <div className="font-bold text-xl mb-2 text-pink-500 group-hover:text-white ">Cantilever chair</div>
        <p className="  text-gray-700 text-base group-hover:text-white">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base  mt-2 group-hover:text-white">
          $42.00
        </p>
      </div>
    </div>



    <div className=" hover:shadow-pink-300  max-w-sm m-5 overflow-hidden shadow-lg bg-white">
      
      <div className="bg-gray-100 h-[270px] w-[361px] place-content-center ">
      <Image
            src={F3}
        alt="Cantilever chair"
        width={150}
        height={180}
        className="ml-20"
      />
      </div>
      <div className="text-center hover:bg-blue-700 group  ">
        <div className="font-bold text-xl mb-2 text-pink-500 group-hover:text-white">Cantilever chair</div>
        <p className="text-gray-700 text-base group-hover:text-white">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base mt-2 group-hover:text-white">
          $42.00
        </p>
      </div>
    </div>



    <div className="max-w-sm hover:shadow-pink-300 m-5   overflow-hidden shadow-lg  bg-white ">
      <div className=" h-[270px] w-[361px] bg-gray-100 place-content-center">
      
        <Image
            src={F2}
        alt="Cantilever chair"
        width={175}
        height={175}
        
      />
      
      </div>
      <div className="text-center hover:bg-blue-700 group">
        <div className="font-bold text-xl mb-2 text-pink-500 group-hover:text-white">Cantilever chair</div>
        <p className="text-gray-700 text-base group-hover:text-white">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base mt-2 group-hover:text-white">
          $42.00
        </p>
      </div>
    </div>



    <div className="max-w-sm hover:shadow-pink-300  overflow-hidden shadow-lg  m-5 ">
      <div className=" h-[270px] w-[361px] bg-gray-100 place-content-center ">
      <Image
            src={F1}
        alt="Cantilever chair"
        width={216}
        height={151}
      />
      </div>
      <div className="text-center  group hover:bg-blue-700 ">
        <div className="font-bold text-xl mb-2 text-pink-500 group-hover:text-white">Cantilever chair</div>
        
        <p className="text-gray-700 text-base group-hover:text-white">
          Code - Y523201
        </p>
        <p className="text-gray-700 text-base mt-2 group-hover:text-white">
          $42.00
        </p>
      </div>
    </div>

  
    </div>
  
    </>
  );
};

export default ProductCard;

    
