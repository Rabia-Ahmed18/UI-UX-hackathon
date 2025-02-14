import Image from "next/image";
import topCat1 from "../public/images/topcat1.png";
import F4 from "../public/images/F4.png";
import img1 from "../public/images/img1.png";
import imageBottom from "../public/images/imageBottom.png";
import topCatBg from "../public/images/topCatBg.jpeg";




export default function TopCategories() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold font-[Josefin-Sans] text-blue-900 mb-8 p-9 m-9 ">
        Top Categories
      </h2>
      <div className="flex  ">
        <div className=" p-4 h-[350px] w-[270px] m-3 space-x-9 w-[247px] h-[255px] hover:shadow-gray-500">
          <div className="relative rounded-full overflow-hidden bg-gray-100 w-[247px] h-[244px]">
            <Image
              src={topCat1}
              alt="Cantilever chair"
              height={171}
              width={171}
              className="ml-9 py-8"
            />

            <button className="w-[94px] h-[29px] bg-green-500 p-9"></button>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-blue-800">
              Mini LCW Chair
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-lg ml-9 text-gray-900">$56.00</span>
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
              className="ml-9 py-8"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-blue-800">
              Mini LCW Chair
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-lg  text-gray-900">
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
              className="ml-9 py-8"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-blue-800">
              Mini LCW Chair
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-lg text-gray-900">
                $56.00
              </span>
            </div>
          </div>
        </div>
        <div className=" p-4 h-[350px] w-[270px] m-3 space-x-9 ">
          <div className="relative rounded-full overflow-hidden bg-gray-100 w-[247px] h-[244px]">
            <Image
              src={topCat1}
              alt="Cantilever chair"
              height={171}
              width={171}
              className="ml-9 py-8"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-blue-800 ">
              Mini LCW Chair
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-lg  text-gray-900">
                $56.00
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[904px] h-[94px]">
        <Image
          src={imageBottom}
          alt="image"
          width={904}
          height={93}
          className="ml-20"
        />
      </div>

      <div className="flex flex-col bg-cover bg-center   items-center justify-center min-h-screen  w-[full] h-[262px]" style={{ backgroundImage: "url('src/app/public/images/topCatBg.jpeg')"}}>
    
        <div className="w-full max-w-md p-4">                                                                                                             

          <div className="flex flex-col items-center ">
        
            <div
              className="w-[1250px] h-[462px]   items-center justify-center  relative" >
               <Image src={topCatBg}
                alt="image"
                height={462}
               width={1250}
              className="bg-cover"
                                  />
                                  
      <div className="absolute my-20 mx-20 justify-center  items-center inset-0 w-[574px] h-[108px] p-3   ">
        <p className=" flex   text-blue-900 text-4xl font-bold">
            
            Get Latest Update By Subscribe
             Our Newsletter
          </p></div>



          


            
              
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
