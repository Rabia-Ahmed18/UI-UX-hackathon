
import Link from 'next/link';
import Image from 'next/image';
import SofaBrown from '../public/images/SofaBrown.png';

export default function DiscountedItems() {
  return (
  
  <>

<h2 className="text-center text-4xl font-bold text-blue-900 p-9 ">Discount Items
</h2>
<div id="collapseMenu"
          className=' flex text-center max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        

          <ul
            className='lg:flex lg:ml-14 lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
         
               <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='lg:hover:text-pink-500 text-blue-900 block font-semibold text-[15px]'>Wood Chair</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='lg:hover:text-pink-500 text-blue-900 block font-semibold text-[15px]'>Plastic Chair</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='lg:hover:text-pink-500 text-blue-900 block font-semibold text-[15px]'>Sofa Collection</Link>
            </li>
           
           
          </ul>
        </div>

    <div className="min-h-screen flex items-center justify-center m-9 ">
   
    
      <div className="bg-white p-2 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-blue-900 pb-6 ">20% Discount On All Products</h1>
          <h2 className="text-2xl text-pink-600 mb-4 linear-9">Eams Sofa Compact</h2>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="text-gray-500 mb-4">
            <li className="flex items-center mb-2">
              <span className="mr-2">✔</span> Material expose like metals
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">✔</span> Simple neutral colours
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">✔</span> Clear lines and geometric figures
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">✔</span> Material expose like metals
            </li>
          </ul>
          <button className=" w-[200px] h-[57px] bg-pink-600 text-white px-4 py-2 rounded-none hover:bg-pink-500">Shop Now</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image src={SofaBrown} alt="Eams Sofa Compact" width={699} height={597} className=" object-contain" />
        </div>
      </div>
    </div>
    </>
  );
}
