import Image from 'next/image';
import trendone from '../public/images/trendone.png';
import trendtwo from '../public/images/trendtwo.png';
import trendthree from '../public/images/trendthree.png';
import L5 from '../public/images/L5.png';
import black from '../public/images/black.png';
import yellow from '../public/images/yellow.png';
import img1 from '../public/images/img1.png';
import img2 from '../public/images/img2.png';
import img3 from '../public/images/img3.png';

export default function TrendingProducts() {
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-8 p-9 m-9 ">Trending Products
        </h2>
        <div className='flex  '>
    <div className="bg-white rounded-none shadow-md p-4 h-[350px] w-[270px] m-3 space-x-9 hover:shadow-gray-500">
      <div className="relative rounded-none overflow-hidden bg-gray-200 w-[247px] h-[244px]">
        <Image
          src={trendone}
          alt="Cantilever chair"
          height={171}
          width={171}
          className='pl-2 py-8'
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800">
          Cantilever chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            $26.00
          </span>
          <span className="ml-2 text-gray-500 line-through">
            $42.00
          </span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-none shadow-md p-4 h-[350px] w-[270px] m-3  hover:shadow-gray-500">
      <div className="relative rounded-none overflow-hidden bg-gray-200 w-[247px] h-[244px]">
        <Image
          src={trendtwo}
          alt="Cantilever chair"
          height={171}
          width={171}
            className='pl-2 py-8'
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800">
          Cantilever chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            $26.00
          </span>
          <span className="ml-2 text-gray-500 line-through">
            $42.00
          </span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-none shadow-md p-4 h-[350px] w-[270px] m-3  hover:shadow-gray-500">
      <div className="relative rounded-none overflow-hidden bg-gray-200 w-[247px] h-[244px]">
        <Image
          src={trendthree}
          alt="Cantilever chair"
          height={171}
          width={171}
            className='pl-2 py-8'
          
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800">
          Cantilever chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            $26.00
          </span>
          <span className="ml-2 text-gray-500 line-through">
            $42.00
          </span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-none shadow-md p-4 h-[350px] w-[270px] m-3  hover:shadow-gray-500">
      <div className="relative rounded-none overflow-hidden bg-gray-200 w-[247px] h-[244px]">
        <Image
          src={L5}
          alt="Cantilever chair"
          height={171}
          width={171}
            className='pl-2 py-8'
          
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800 ">
          Cantilever chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            $26.00
          </span>
          <span className="ml-2 text-gray-500 line-through">
            $42.00
          </span>
        </div>
      </div>
    </div>
    </div>
    <div className='flex gap-7 py-9 '>
    <div className='w-[420px] h-[270px] bg-pink-50  shadow-md hover:shadow-gray-500  '> 
      <div className='w-[269px] h-[56px] py-9 px-5'>
      <h3 className='text-blue-900 text-xl font-semibold mb-3'>23% off in all products</h3> 
      <a href='#' className=' text-pink-500  underline underline-offset-4 hover:text-black  '>Shop Now</a>

      </div>
      <div>
        <Image
        src={black}
        alt='image'
        width={213}
        height={207}
        className='ml-40'/>
      </div>
      </div>
    <div className='w-[420px] h-[270px]  bg-[#E7E4F8]  shadow-md hover:shadow-gray-500  '>
      <div className='w-[269px] h-[56px] py-9 px-5 '>
      <h3 className='text-blue-900 text-xl font-semibold mb-3'>23% off in all products</h3> 
      <a href='#' className=' text-pink-500  underline underline-offset-4 hover:text-black  '>View Collection</a>

      </div>
      <div>
        <Image
        src={yellow}
        alt='image'
        width={312}
        height={173}
        className='ml-20 mt-10 '/>
      </div>
      
    </div>
    <div className='w-[420px] h-[270px]  space-y-7 '>
   
      <div className='w-[267px] h-[74px]  flex   shadow-md hover:shadow-gray-500  '>
      <div className=" bg-gray-100 w-[107px] pl-3"> <Image src={img1} alt="Executive Seat chair" width={65} height={65} />
     </div>
      <div className="pl-4 pt-4  ">
         <h3 className="text-sm w-[151px] h-[33px] font-semibold text-blue-900">Executive Seat chair</h3> 
     <p className="text-md  text-blue-900 line-through">$32.00</p>
      </div> 
      </div>
   
      <div className='w-[267px] h-[74px]  flex  shadow-md hover:shadow-gray-500  '>
      <div className=" bg-gray-100 w-[107px] pl-3"> <Image src={img2} alt="Executive Seat chair" width={65} height={65} />
     </div>
      <div className="pl-4 pt-4  ">
         <h3 className="text-sm w-[151px] h-[33px] font-semibold text-blue-900">Executive Seat chair</h3> 
     <p className="text-md text-blue-900 line-through">$32.00</p>
      </div> 
      </div>
   
      <div className='w-[267px] h-[74px]  flex  shadow-md hover:shadow-gray-500  '>
      <div className=" bg-gray-100 w-[107px] pl-3"> <Image src={img3} alt="Executive Seat chair" width={65} height={65} />
     </div>
      <div className="pl-4 pt-4  ">
         <h3 className="text-sm w-[151px] h-[33px] font-semibold text-blue-900">Executive Seat chair</h3> 
     <p className="text-md text-blue-900 line-through">$32.00</p>
      </div> 
      </div>
      
    </div>

  

    </div>



  

    </>
  );
}

