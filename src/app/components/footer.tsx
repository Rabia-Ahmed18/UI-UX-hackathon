import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import { BiLogoInstagramAlt } from "react-icons/bi";

import Link from "next/link"
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-[#E7E4F8]">
  <div className="container px-5 py-24 mx-auto mt-[40px]">
    <div className="flex flex-wrap md:text-left text-center order-first ">


    <div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 gap-y-10 ">
       <Link href={'/'}> Hekto</Link>
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 ">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
            </label>
            <input
              type="text"
              id="footer-field"
              placeholder='Enter Email Address'
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded-none">
            Sign-Up
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
        Contact Info
          <br className="lg:block hidden" />
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 ml-6 ">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10 text-center space-y-4 lg-text-center">
          <li>
          

            <a className="text-gray-600 hover:text-gray-800 ">Laptops & Computers</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ">Cameras & Photography</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ">Smart Phones & Tablets</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ">Video Games & Consoles</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ">Waterproof Headphones</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 className="title-font font-bold text-black  tracking-widest text-lg mb-3">
        Customer Care
        </h2>
        <nav className="list-none mb-10 space-y-3 ">
          <li>
            
            <Link  href={'/myAccount'} className="text-gray-600 hover:text-gray-800">My Account</Link>
            
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Discount</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Orders History</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Pages
        </h2>
        <nav className="list-none mb-10  space-y-3">
          <li>
            <Link href={'/blog'} className="text-gray-600 hover:text-gray-800">Blog</Link>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Browse the Shop</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Category</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Pre-Built Pages</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Visual Composer Elements</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">WooCommerce Pages</a>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-[#E7E4F8]">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2024 Hekto —
        <Link
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @Right Reserved
        </Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target='blank' href={"/"} className="text-gray-900">
      <FaFacebook className='text-3xl ' />
      </Link>

      <Link
      target='blank' href={"/"} className="ml-3 text-gray-900">
      <BiLogoInstagramAlt className='text-3xl' />
      </Link>
      
      <Link
      target='blank' href={"/"}className="ml-3 text-gray-900">
        <FaTwitter className='text-3xl ' />
      </Link>
    </span>
    </div>
  </div>
</footer>

    </div>

  )
}

export default Footer

        
           
         
