
import Link from "next/link";
import Image from "next/image";
import Heckto from '../public/images/Hekto.png';

export default function Haeder (){
  return (


<header className='flex border-b py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center gap-5 w-full'>
      
        <div id="collapseMenu"
          className='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        

          <ul
            className='lg:flex lg:ml-14 lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
         
              <Image src={Heckto} alt="logo" width={98} height={34} />
              
            
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <Link href='javascript:void(0)'
                className='lg:hover:text-pink-500 block font-semibold text-[15px]'>Home</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='javascript:void(0)'
              className='lg:hover:text-pink-500 text-gray-800 block font-semibold text-[15px]'>Pages</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='javascript:void(0)'
              className='lg:hover:text-pink-500 text-gray-800 block font-semibold text-[15px]'>Products</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='javascript:void(0)'
              className='lg:hover:text-pink-500 text-gray-800 block font-semibold text-[15px]'>Blog</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='javascript:void(0)'
              className='lg:hover:text-pink-500 text-gray-800 block font-semibold text-[15px]'>Shop</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='javascript:void(0)'
              className='lg:hover:text-pink-500 text-gray-800 block font-semibold text-[15px]'>Contacts</Link>
            </li>
          </ul>
        </div>

        <button id="toggleOpen" className='lg:hidden ml-auto'>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>

       


<div className="flex rounded-none border-2 border-gray-200 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="email" 
          className="w-full outline-none bg-white text-sm px-5 py-2" />
        <button type='button' className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="19px" className="fill-white">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </button>
      </div>


      </div>
    </header>




  )};
