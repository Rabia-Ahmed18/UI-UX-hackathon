import Image from 'next/image';
import Frame1 from '../public/images/Frame1.png'
import Frame2 from '../public/images/Frame2.png'
import Frame3 from '../public/images/Frame3.png'

export default function TrendCard ()  {
  return (
    <>
    
    <h2 className="text-center text-4xl font-bold font-JosefinSans text-blue-900 mb-8 p-9 m-9 ">Latest Blog
    </h2>
     <div className='flex space-x-14 mt-9'>
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[370px] h-[493px]">
      <Image
        src={Frame1}
        alt="Living Room Interior"
        width={370}
        height={255}
        
      />

      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs text-gray-500 font-[Josefin Sans]  ">Surfauxion</span>
          <span className="text-xs text-gray-500 mx-2">|</span>
          <span className="text-xs font-[Josefin Sans]  text-gray-500">21 August, 2020</span>
        </div>

        <h2 className="text-lg font-semibold mb-2 font-[Josefin Sans]  text-blue-900 ">Top essential trends in 2021</h2>

        <p className="text-gray-600 font-[Josefin Sans] font-thin text-sm leading-7">
          More off this less hello samlande lied much over tightly circa horse taped
          mightly
        </p>

        <a className=" font-[Josefin Sans]  mt-4 inline-block text-blue-900 underline-offset-4 hover:text-pink-500  font-normal cursor-pointer py-2 px-4 rounded">
          Read More
        </a>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[370px] h-[493px]">
      <Image
        src={Frame2}
        alt="Living Room Interior"
        width={370}
        height={255}
        
      />

      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs text-gray-500 font-[Josefin Sans]  ">Surfauxion</span>
          <span className="text-xs text-gray-500 mx-2">|</span>
          <span className="text-xs font-[Josefin Sans]  text-gray-500">21 August, 2020</span>
        </div>

        <h2 className="text-lg font-semibold mb-2 font-[Josefin Sans]  text-blue-900 ">Top essential trends in 2021</h2>

        <p className="text-gray-600 font-[Josefin Sans] text-sm leading-7 font-thin">
          More off this less hello samlande lied much over tightly circa horse taped
          mightly
        </p>

        <a className=" font-[Josefin Sans]  mt-4 inline-block text-blue-900 underline-offset-4 hover:text-pink-500  font-normal cursor-pointer py-2 px-4 rounded">
          Read More
        </a>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[370px] h-[493px]">
      <Image
        src={Frame3}
        alt="Living Room Interior"
        width={370}
        height={255}
        
      />

      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs text-gray-500 font-[Josefin Sans]  ">Surfauxion</span>
          <span className="text-xs text-gray-500 mx-2">|</span>
          <span className="text-xs font-[Josefin Sans]  text-gray-500">21 August, 2020</span>
        </div>

        <h2 className="text-lg font-semibold mb-2 font-[Josefin Sans]  text-blue-900 ">Top essential trends in 2021</h2>

        <p className="text-gray-600 font-[Josefin Sans] font-thin text-sm leading-7">
          More off this less hello samlande lied much over tightly circa horse taped
          mightly
        </p>

        <a className=" font-[Josefin Sans] text-semibold text-blue-900  mt-4 inline-block hover:text-pink-500 font-normal cursor-pointer py-2 px-4 rounded">
          Read More
        </a>
      </div>
    </div>
    </div>
    </>
  );
};
