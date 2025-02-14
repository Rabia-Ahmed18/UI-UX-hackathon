
"use client"

import Link from 'next/link';
import Image from 'next/image';
import bag1 from '../public/images/bag1.png';
import bag2 from '../public/images/bag2.png';
import bag3 from '../public/images/bag3.png';
import bagMain from '../public/images/bagMain.png';



export default function Products(){
    return (
        <>
        
        <div className="w-full h-[286px] bg-[#E7E4F8] ">
 <div className="w-[500px] h-[62px] py-20 px-20 ">
  <h1 className="font-bold text-4xl justify-center mb-3 text-blue-900  ">Product Details</h1>
 

  <ul className="flex items-center justify-center space-x-4 font-[sans-serif]">
      <li className="text-black text-base cursor-pointer">
        Home
      </li>
      <li className="text-black text-lg">.</li>
      <li className="text-black text-base cursor-pointer">
        Pages
      </li>
      <li className="text-black text-lg">.</li>
      <li className=" text-base  cursor-pointer hover:text-pink-500">
        Products Details
      </li>
    </ul>






 </div>  

 </div>

<div >
 <div className="w-[1170px] h-[509px] shadow-purple-100  flex shadow-lg m-9   rounded-sm">
<div className='w-[200px] h-[509px] justify-items-center rounded-sm '>
    <div>
        <Image 
        src={bag1}
        height={155}
        width={151}
        alt='bag image'
        className='py-3' 
        />
    </div>
    <div>
        <Image 
        src={bag2}
        height={155}
        width={151}
        alt='bag image'
       
           />
    </div>
    <div>
        <Image 
        src={bag3}
        height={155}
        width={151}
        alt='bag image' 
          className='py-3'
               />
          </div>
          </div>
          <div className=' w-[375px] h-[487px] mt-3  '>
            <Image
            src={bagMain}
            alt='mainBag'
            width={375}
            height={487}/>
          </div>
          



          <div className="bg-white p-6 rounded-lg max-w-md w-full"> 
        <h1 className="text-2xl font-semibold text-blue-900 mb-2">Playwood arm chair</h1> 
        <div className="flex items-center mb-4">
           <div className="flex items-center">
             <span className="text-yellow-500">★★★★★</span> 
             <span className="ml-2 text-gray-600">(22)</span> 
             </div>
              </div>
               <div className="flex items-center mb-4">
                 <span className="text-xl text-black text-blue-900">$32.00</span> 
                 <span className="text-pink-500 line-through ml-2">$32.00</span>
                  </div> <div className="mb-4"> 
                    <span className="text-black">Color</span>
                     </div>
                      <p className="text-gray-400 mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit. </p>
                       <button className=" text-black text-blue-900 py-2  mb-4">Add To Cart
                       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"> </path></svg>

                       </button>
                       <div className="mb-4"> 
                        <h2 className="text-black text-blue-900">Categories:</h2>
                       </div>
                       <div className="mb-4">
                         <h2 className="text-black text-blue-900">Tags:</h2> 
                      </div>
                       <div className="flex space-x-4 text-blue-900 text-black"> 
                        <h2 className='text-black text-blue-900 mb-4'>Share</h2>
                       </div>
                       <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a target="blank" className="text-blue-900" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-3xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a><a target="blank" className="ml-3 text-pink-500" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg></a><a target="blank" class="ml-3 text-blue-900" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-3xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></span>
                       </div>
      </div>


  </div>
        <div className=' h-[649px] w-full'>
        <ul
            className='  my-20   align-between lg:flex lg:ml-14 lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
         
               <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className='    text-blue-900 lg:hover:underline underline-offset-4   block font-semibold text-md'>Description</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className=' text-blue-900 lg:hover:underline underline-offset-4  block font-semibold text-md'>Additional Info</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className=' text-blue-900 lg:hover:underline underline-offset-4  block font-semibold text-md'>Reviews</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='#'
              className=' text-blue-900 lg:hover:underline underline-offset-4  block font-semibold text-md '>Videos</Link>
            </li>
           
          </ul>
          <h1 className='text-lg ml-14 my-5 text-blue-900 font-semibold ml-6'>Various tempor.</h1>
          <p className='text-gray-400  text-md text-justify ml-14 leading-8 align-center'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        
          <h1 className='text-lg ml-14 my-5 text-blue-900 font-semibold ml-6'>More Details</h1>
          <p className='text-gray-400  text-sm text-justify ml-14 leading-8 align-center'>
            <a>→</a> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
          <p className='text-gray-400  text-sm text-justify ml-14 leading-8 align-center'>
            <a>→</a> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
          <p className='text-gray-400  text-sm text-justify ml-14 leading-8 align-center'>
            <a>→</a> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
          <p className='text-gray-400  text-sm text-justify ml-14 leading-8 align-center'>
            <a>→</a> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
           
        
        
        
        </div>
        
        
        </>
    )
}