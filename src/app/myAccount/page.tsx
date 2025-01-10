
import Image from 'next/image';
import imageBottom from '../public/images/imageBottom.png';
import Link from 'next/link';
import ShopGridDefault from '../shopGridDefault/page';

export default function Login(){



    return (
<>
<div className="w-[1920px] h-[287px] bg-[#E7E4F8] ">
 <div className="w-[400px] h-[62px] py-20 px-20 ">
  <h1 className="font-bold text-3xl justify-center mb-3 ">My Account</h1>


<ul className="flex items-center justify-center space-x-4 font-[sans-serif]">
      <li className="text-gray-500 text-base cursor-pointer">
      

         Home
      
      </li>
      <li className="text-gray-500 text-lg">.</li>
      <li className="text-gray-500 text-base cursor-pointer">
        pages
      </li>
      <li className="text-gray-500 text-lg">.</li>
      <li className="text-[#333] text-base font-bold cursor-pointer">
       My account 
      </li>
    </ul>




 </div>  

</div>
<div className="flex items-center justify-center min-h-screen  ">
<div className="bg-white p-8 rounded-sm  w-[544px] h-[474px] max-w-sm border  focus:shadow-outline">
  <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
   <p className="text-center mb-6 text-gray-400">Please login using account detail below.</p>
    <form> <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
         </label> 
        <input type="email" id="email"
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
         placeholder="Email Address" />
          </div>
           <div className="mb-6">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                </label>
                 <input type="password" id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Password" /> 
                  </div> 
                  <div className="flex items-center justify-between mb-6"> 
                   <a href="#" 
                   className="inline-block align-baseline  text-sm text-gray-400 hover:text-pink-800"> Forgot your password? 
                   </a>
                    </div>
                     <div className="flex items-center justify-center">
                        <button type="submit" className="bg-pink-600 w-[432px] rounded-sm h-[47px] hover:bg-pink-700 text-white  py-2 px-4 focus:outline-none focus:shadow-outline" > Sign 
                          </button> 
                        </div>
                         </form> 
                         <div className="text-center mt-6"> 
                         <a href="#" className="inline-block align-baseline  text-sm text-gray-400 hover:text-blue-800">
                            Dont have an Account? Create account </a> 
                            </div>
                             </div> 


                             </div>

                            <div className='w-[904px] h-[94px]'>
                              <Image
                              src={imageBottom}
                              alt="image"
                              width={904}
                              height={93}
                              className='ml-20'/>
                            </div>
                            <ShopGridDefault/>
                             </>
                                 
                                )
                                }