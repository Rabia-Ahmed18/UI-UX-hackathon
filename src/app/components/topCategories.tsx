import Image from 'next/image';
import topCat1 from '../public/images/topcat1.png';
import F4 from '../public/images/F4.png';
import img1 from '../public/images/img1.png'

export default function TopCategories(){
    return (
        <>
        
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-8 p-9 m-9 ">Top Categories
        </h2>
        <div className='flex  '>
    <div className=" p-4 h-[350px] w-[270px] m-3 space-x-9 w-[247px] h-[255px] hover:shadow-gray-500">
      <div className="relative rounded-full overflow-hidden bg-gray-100 w-[247px] h-[244px]">
        <Image
          src={topCat1}
          alt="Cantilever chair"
          height={171}
          width={171}
          className='ml-9 py-8'
        />

        <button className='w-[94px] h-[29px] bg-green-500 p-9'>

        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800">
          Mini LCW Chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg ml-9 text-gray-900">
            $56.00
          </span>
         
        </div>
      </div>
    </div>
    <div className=" p-4 h-[350px] w-[270px] m-3 space-x-9 hover:shadow-gray-500">
      <div className="relative rounded-full overflow-hidden bg-gray-100 w-[247px] h-[244px]">
       <Image
          src={F4}
          alt="Cantilever chair"
          height={171}
          width={171}
            className='ml-9 py-8'
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800">
        Mini LCW Chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            $56.00
          </span>
          
        </div>
      </div>
    </div>
    <div className=" p-4 h-[350px] w-[270px] m-3 space-x-9 hover:shadow-gray-500">
      <div className="relative rounded-full overflow-hidden bg-gray-100 w-[247px] h-[244px]">
         <Image
          src={img1}
          alt="Cantilever chair"
          height={171}
          width={171}
            className='ml-9 py-8'
          
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800">
        Mini LCW Chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            $56.00
          </span>
        
        </div>
      </div>
    </div>
    <div className=" p-4 h-[350px] w-[270px] m-3 space-x-9 hover:shadow-gray-500">
      <div className="relative rounded-full overflow-hidden bg-gray-100 w-[247px] h-[244px]">
         <Image
          src={topCat1}
          alt="Cantilever chair"
          height={171}
          width={171}
            className='ml-9 py-8'
          
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-blue-800 ">
        Mini LCW Chair
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            $56.00
          </span>
         
        </div>
      </div>
    </div>



    
    </div>
        
        
        
        </>
    )
}