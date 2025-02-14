import Image from 'next/image';
import blog1 from '../public/images/blog1.png';
import blog2 from '../public/images/blog2.png';
import blog3 from '../public/images/blog3.png';


export default function Blog (){
    return (
        <>
    <div className="w-[1920px] h-[287px] bg-[#E7E4F8] ">
 <div className="w-[400px] h-[62px] py-20 px-20 ">
  <h1 className="font-bold text-3xl justify-center mb-3 ">Blog Page</h1>


<ul className="flex items-center justify-center space-x-4 font-[sans-serif]">
      <li className="text-gray-500 text-base cursor-pointer breadcrumb-item">
      
      <a href="/">Home</a>
       
      
      </li>
   
      <li className="text-gray-500 text-base">.Pages</li>
      <li className="text-gray-500  text-base font-normal cursor-pointer hover:text-pink-500">
       Blog
      </li>
    </ul>


 </div>  




</div>


      <div className='bg-white'>
    
        <div className=' p-9 mb-4    '>
            <div>
            <Image src={blog1} alt='image' height={453} width={870}
            className='m-9'/>
            </div>
             <h2 className='text-2xl pl-8 text-blue-900 font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h2>

            <p className='  pl-8 mt-0 py-2 text-gray-400 w-[859px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Velit facilisis quis auctor pretium ipsum, eu rutrum. 
                 Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. 
                Adipiscing purus, cursus vulputate id id dictum at.</p>
                <a href='/singleBlog' className='pl-8 mt-0 py-2 font-bold text-blue-800 '>Read More </a>
        </div>
    </div>   
      <div className='bg-white'>
    
        <div className=' p-9  '>
            <div>
            <Image src={blog2} alt='image' height={453} width={870}
            className='m-9 '/>
            </div>
            <h2 className='text-2xl pl-8 text-blue-900 font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h2>

<p className='  pl-8 mt-0 py-2 text-gray-400 w-[859px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Velit facilisis quis auctor pretium ipsum, eu rutrum. 
     Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. 
    Adipiscing purus, cursus vulputate id id dictum at.</p>
    <a href='/singleBlog' className='pl-8 mt-0 py-2 font-bold text-blue-800 '>Read More </a>




        </div>
    </div>   
      <div className='bg-white'>
    
        <div className=' p-9  '>
            <div>
            <Image src={blog3} alt='image' height={453} width={870}
            className='m-9 '/>
            </div>
            <h2 className='text-2xl pl-8 text-blue-900 font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h2>

<p className='  pl-8 mt-0 py-2 text-gray-400 w-[859px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Velit facilisis quis auctor pretium ipsum, eu rutrum. 
     Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. 
    Adipiscing purus, cursus vulputate id id dictum at.</p>
    <a href='/singleBlog' className='pl-8 mt-0 py-2 font-bold text-blue-800 '>Read More </a>





        </div>
    </div>   
    <ul className="flex space-x-5 justify-center font-[Josefin-sans]">
      <li className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>
      <li
        className="flex items-center justify-center shrink-0  border hover:bg-pink-500 border-gray-500 cursor-pointer text-base font-bold text-black px-[13px] h-9 rounded-md">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0  border hover:bg-pink-500 border-gray-500 cursor-pointer text-base font-bold text-black px-[13px] h-9 rounded-md">
        2
      </li>
      <li
        className="flex items-center justify-center shrink-0  border hover:bg-pink-500 border-gray-500 cursor-pointer text-base font-bold text-black px-[13px] h-9 rounded-md">
        3
      </li>
      <li
        className="flex items-center justify-center shrink-0  border hover:bg-pink-500 border-gray-500 cursor-pointer text-base font-bold text-black px-[13px] h-9 rounded-md">
        4
      </li>
      <li className="flex items-center justify-center shrink-0 border hover:border-pink-500 cursor-pointer w-9 h-9 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>
    </ul>



    
        </>
    )
}