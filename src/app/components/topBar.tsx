'use client'


 
import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import { useState } from 'react'; 
import Link from 'next/link';


const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm flex items-center justify-center">
     
      <div className="w-full max-w-[1200px] flex items-center justify-between px-4">
        <div className="flex items-center justify-center gap-6 w-full sm:w-auto">
          <Link
            href="mailto:abc@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaEnvelope />
            <span>abc@gmail.com</span>
          </Link>
          
          <Link
            href="tel:1234567890"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </Link>
        </div>

        
        <div className="flex items-center justify-center gap-6 w-full sm:w-auto ">
          <div
            className="relative cursor-pointer flex items-center gap-1  "
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 ">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 ">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          <Link href="/myAccount" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaUser />
            <span>Login</span>
          </Link>

      
          <Link href="/wishlist" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaHeart />
            <span>Wishlist</span>
          </Link>

          
          <Link href="/shoppingCart" className="cursor-pointer hover:text-gray-200">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;