import Image from "next/image";

import freedelivery from "../public/images/freedelivery.png";
import premiumquality from "../public//images/premiumquality.png";
import hoursicon from "../public/images/hoursicon.png";

import cashback from "../public/images/cashback.png";

export default function Shopex() {
  return (
    <>
      <div className="h-[42] w-[367]   p-9 ">
        <h2 className="text-center  text-4xl font-bold text-blue-900 mb-8   ">
          What Shopex Offer!
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
            <div className="font-bold text-xl mt-9   text-blue-900">
              24/7 Support
            </div>
            <p className="text-gray-700 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores cum vitae sed quidem mollitia.
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
            <div className="font-bold text-xl mt-9   text-blue-900">
              24/7 Support
            </div>
            <p className="text-gray-700 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores cum vitae sed quidem mollitia.
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
            <div className=" font-bold text-xl mt-9   text-blue-900">
              24/7 Support
            </div>
            <p className="text-gray-700 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores cum vitae sed quidem mollitia.
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
            <div className="font-bold text-xl mt-9   text-blue-900">
              24/7 Support
            </div>
            <p className="text-gray-700 text-base mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores cum vitae sed quidem mollitia.
            </p>
          </div>
        </div>
      </div>




    </>
  );
}
