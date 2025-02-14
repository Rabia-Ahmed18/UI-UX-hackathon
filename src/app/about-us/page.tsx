import Image from 'next/image';
import aboutUs from "../public/images/aboutUs.png";
import freedelivery from '../public/images/freedelivery.png';
import cashback from '../public/images/cashback.png';
import premiumquality from '../public/images/premiumquality.png';
import hoursicon from '../public/images/hoursicon.png';
import clients from '../public/images/clients.png';

export default function AboutUs (){
    return (
        <>
<div className="w-[1900px] h-[287px] bg-[#E7E4F8] w-full max-w-[1260px]  ">
 <div className="w-[400px] h-[62px] py-20 px-20  ">
  <h1 className="font-bold text-blue-900 text-3xl justify-center mb-3 ">About Us</h1>


<ul className="flex items-center justify-center space-x-4 w-full max-w-[1200px]  font-[sans-serif]">
      <li className="text-gray-500 text-base cursor-pointer">
      

         Home
      
      </li>
      <li className="text-gray-500 text-lg">.</li>
      <li className="text-gray-500 text-base cursor-pointer">
        pages
      </li>
      <li className="text-gray-500 text-lg">.</li>
      <li className="text-gray-500 text-base font-thin hover:text-pink-600 cursor-pointer">
       About Us
      </li>
    </ul>




 </div>  

</div>

<div className="w-[1191px] h-[490px] flex  py-20">
   
   <div className="w-[570px] h-[479px]  ">
   

<Image src={aboutUs}
alt='image'
height={570}
width={479}/>

    </div>






    <div className="w-[595px] h-[490px]   ">

<div className=" flex flex-col items-center justify-center ">
<h1 className="text-4xl  font-[Josefin Sans] font-black tracking-wide text-blue-900 p-4 m-4">
     Know About Our E-Commerce Business, History
    </h1>  
 </div>
<p className='font-[Josefin Sans] text-md text-gray-400'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
</p>
<button className='text-center w-[145px] h-[44px] rounded-sm p-3 text-white  font-medium bg-pink-600 mt-5 hover:bg-pink-500 cursor-pointer'
>Contact Us

</button>

    </div>

</div>


<div className="h-[42] w-[367]   py-20 ">
        <h2 className="text-center  text-4xl font-bold text-black mb-8   ">
        Our Features
        </h2>
      </div>
      <div className="flex sm:h-auto sm:w-auto">
        <div className="max-w-sm  rounded-lg overflow-hidden shadow-lg hover:shadow-gray-400 p-7 m-5  h-[320px] w-[270px]">
          <Image src={freedelivery} 
          height={65} 
          width={65}
           alt="cashback"
         className="ml-20"
            />
          <div className="text-center h-[127px] w-[217px]">
            <div className="font-semibold text-xl mt-9   text-blue-900">
              Free Delivery
            </div>
            <p className="text-gray-400 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            
            </p>
          </div>
        </div>

        <div className="  rounded-lg overflow-hidden shadow-lg hover:shadow-gray-400 p-7 m-5  h-[320px] w-[270px]">
          <Image src={cashback} 
          height={65} 
          width={65} 
          alt="cashback" 
          className="ml-20"/>
          <div className="text-center h-[127px] w-[217px]">
            <div className="font-semibold text-xl mt-9   text-blue-900">
         100% Cash Back
            </div>
            <p className="text-gray-400 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-gray-400 p-7 m-5 h-[320px] w-[270px] sm:h-auto sm:w-auto">
          <Image src={premiumquality} 
          height={65}
           width={65}
            alt="cashback" 
               className="ml-20"
            
          />
          <div className="text-center h-[127px] w-[217px]">
            <div className=" font-semibold text-xl mt-9   text-blue-900">
              Quality Product
            </div>
            <p className="text-gray-400 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      
            </p>
          </div>
        </div>
        <div className="max-w-sm  rounded-lg overflow-hidden shadow-lg hover:shadow-gray-400 p-7 m-5  h-[320px] w-[270px]">
          <Image
            src={hoursicon}
            height={65}
            width={65}
            alt="cashback"
            className="ml-20"
          />
          <div className="text-center h-[127px] w-[217px] ">
            <div className="font-semibold text-xl mt-9   text-blue-900">
              24/7 Support
            </div>
            <p className="text-gray-400 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            
            </p>
          </div>
        </div>
      </div>

      <div className="w-[1900px] h-[503px] my-20 bg-[#E7E4F8] justify-center  flex  w-full max-w-[1260px]  ">
 <div className=" py-20 px-10  ">
 <h2 className="text-center  text-4xl font-bold text-black mb-8 place-items-center    ">
        Our Client Say!
        </h2>
        <Image src={clients}
        alt='image'
        height={64}
        width={191}

          className='ml-9' />
          <h2 className='font-semibold text-lg text-center mt-3'> Selina Gomez</h2>
          <p className='font-extralight text-gray-400 text-sm text-center '> CEO at Webecy Digital</p>
          <p className='font-extralight text-gray-400 text-sm text-center '> </p>
   
          



 </div>  
 

</div>

        </>
    )
}