"use client"

import Image from 'next/image';
import contactImage from '../public/images/contactImage.png';



export default function ContactUs (){
    return(
        <>
<div className="w-[1920px] h-[287px] bg-[#E7E4F8] ">
 <div className="w-[400px] h-[62px] py-20 px-20 ">
  <h1 className="font-bold text-3xl justify-center mb-3 ">Contact Us</h1>


<ul className="flex items-center justify-center space-x-4 font-[sans-serif]">
      <li className="text-gray-500 text-base cursor-pointer breadcrumb-item">
      
      <a href="/">Home</a>
       
      
      </li>
   
      <li className="text-gray-500 text-lg">.</li>
      <li className="text-gray-500  text-base font-normal cursor-pointer hover:text-pink-500">
       Contact Us
      </li>
    </ul>
 </div>  
</div>



<div className="w-[1191px] h-[490px] flex  m-9 ">
   
   <div className="w-[595px] h-[490px]  ">
    <h1 className="text-4xl font-black tracking-wide text-blue-900 p-4 m-4">
        Information About Us
    </h1>
    <p className="text-md text-gray-400 m-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
    </p>


<div className="flex justify-between items-center w-32 mb-9">
     <div className="w-10 h-10 bg-purple-700 rounded-full"></div> 
     <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
      <div className="w-10 h-10 bg-cyan-500 rounded-full"></div>
       </div>
    </div>






    <div className="w-[595px] h-[490px]  ">

<div className=" flex flex-col items-center justify-center ">
<h1 className="text-4xl font-black tracking-wide text-blue-900 p-4 m-4">
        Information About Us
    </h1>  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
         <div className="flex items-center space-x-4"> 
            <div className="w-12 h-12 bg-purple-700 rounded-full">
                </div> 
                <div> 
                    <p className="text-lg font-thin text-gray-400">Tel: 877-67-88-99</p> 
                    <p className="text-lg text-gray-400">E-Mail: shop@store.com</p>
                     </div>
                      </div>




                       <div className="flex items-center space-x-4">
     <div className="w-12 h-12 bg-pink-500 rounded-full">
        </div>
         <div> 
            <p className="text-lg font-thin text-gray-400">Support Forum</p>
             <p className="text-lg text-gray-400">For over 24hr</p> 

             </div>
              </div>
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-orange-300 rounded-full">
                    </div> 
                    <div>
                         <p className="text-lg font-thin text-gray-400">20 Margaret st, London</p> 
                         <p className="text-lg text-gray-400">Great britain, 3NM98-LK</p>
                          </div> 
                          </div>
                           <div className="flex items-center space-x-4"> 
                            <div className="w-12 h-12 bg-green-400 rounded-full">
                                </div>
                                 <div>
                                     <p className="text-lg font-thin text-gray-400 ">Free standard shipping</p> 
                                     <p className="text-lg text-gray-400">on all orders.</p>
                                      </div> 
                                      </div> 
                                      </div>
                                       </div>


    </div>

    


</div>

<div className="w-[1191px] h-[490px] flex  m-9 ">
<div className="w-[595px] h-[490px]  ">
    <h1 className="text-4xl font-black tracking-wide text-blue-900 p-4 m-4">
       Get In Touch

    </h1>
    <p className="text-md text-gray-400  ml-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
    </p>


    <div>
    <form> <div className="m-4 flex gap-4  ">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Your Name">
         </label> 
        <input type="name" id="name"
         className=" border-2 text-sm rounded w-[255px] h-[45px] py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
         placeholder="Your Name*" />
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="E-mail">
         </label> 
        <input type="email" id="email"
         className=" border-2 text-sm rounded w-[255px] h-[45px] py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
         placeholder="Email Address" />



          </div>
           <div className="m-4 pl-4 ">
           <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="Subject">
         </label> 
        <input type="subject" id="subject"
         className=" border-2 text-sm rounded w-[537px] h-[45px] py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
         placeholder="Subject*" />
                  </div> 
           <div className="m-4 pl-4 ">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
         </label> 
        <textarea id="message"
         className=" border-2 text-sm rounded w-[534px] h-[166px] py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
         placeholder="Type Your Message*" />
                  </div> 
                  <div className="flex items-center justify-between mb-2npm"> 
                  
                    </div>
                     <div className="flex items-center justify-start ml-6">
                        <button type="submit" className="bg-pink-600 w-[157px] rounded-sm h-[44px] hover:bg-pink-700 text-white  py-2 px-4 focus:outline-none focus:shadow-outline" > Send Mail
                          </button> 
                        </div>
                         </form> 
    </div>


    </div>
<div className="w-[595px] h-[490px]">
   <Image src={contactImage}
   alt='image'
   width={723}
   height={629}
   className="mb-9"
   />



    </div>



    </div>

    


        </>
    )
}