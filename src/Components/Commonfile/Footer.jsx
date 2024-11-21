import React, { useEffect, useState } from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LiaFaxSolid } from "react-icons/lia";

import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <div className='w-full h-screen relative z-10 bg-white'>
      <div className="w-full min-h-[98%] bg-[#000000] bg-opacity-90 flex flex-col md:flex-row gap-20 py-10 px-5 relative">
        <div className="w-full py-6 text-center md:w-[30%] h-[100%]">
          <img className='ml-[25%] md:ml-12'  alt=""  />
          <p className='leading-9 mt-6 text-sm text-capitalize text-center flex flex-col text-white '>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content.Lorem Ipsum is <br /> simply dummy text of been the <br /> industry's standard ...</p>
          <div className="flex justify-center items-center md:ml-0 gap-3 md:gap-4 mt-6 ">
          
            <div className="p-2 bg-white rounded-full">
              <a href="www.linkedin.com/in/prakash-choure-3087b71b2" target="_blank" rel="noopener noreferrer">
      <TiSocialFacebook className="text-blue-600 text-3xl" />
    </a>
            
            
            </div>
          
            <div className="p-2 bg-white rounded-full">  <a href="https://github.com/PrakashChoure2002" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-blue-600 text-3xl" /></a></div>
            <div className="p-2 bg-white rounded-full"> <a href="https://github.com/PrakashChoure2002" target="_blank" rel="noopener noreferrer">
      <TiSocialTwitter className="text-blue-600 text-3xl" /></a></div>
            <div className="p-2 bg-white rounded-full"> <a href="https://www.instagram.com/prakashchoure_12/" target="_blank" rel="noopener noreferrer">
      <AiOutlineInstagram className="text-blue-600 text-3xl" /></a></div>
            <div className="p-2 bg-white rounded-full">    <a href="www.linkedin.com/in/prakash-choure-3087b71b2" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className="text-blue-600 text-3xl" />
    </a></div>
          </div>
        </div>
        <div className="text-capitalize flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className="my-3 block font-bold text-lg">MAIN MENU</h1>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Home</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Search</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Privicy Policy</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Shipping Info</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Latest News</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Catalog</a>
        </div>
        <div className="text-capitalize flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className="my-3 block font-bold text-lg">QUICK VIEW</h1>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Best Product</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Cosmetics</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Beauty World</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Offer Collection</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Mega Collection</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Training Collection</a>
        </div>
        <div className="text-capitalize flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className="my-3 block font-bold text-lg">LINKS</h1>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">About Us</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Contact Us</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Faq</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Portfolio</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Search</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Wishlist</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Lookbook</a>
        </div> 
        <div className="text-capitalize flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className='font-bold text-lg'>STORE INFO</h1>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block"><IoLocationOutline className='inline-block' />   Random Addres  <br />  India</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block"><IoCall className='inline-block' /> Call Us: +91-9826896140</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block"><MdOutlineEmail className='inline-block' /> Email Us: <br /> prakashchoure2002@gmail.com</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block"><LiaFaxSolid className='inline-block' /> Fax:9826896140 </a>
        </div>
        <div className="absolute right-6 bottom-10 p-4 bg-red-400 rounded-full border-4 border-white"><a href=""><MdKeyboardDoubleArrowUp /></a></div>
      </div>
      <div className="ftr w-full py-8 px-10 text-black bg-[#FFFFFF]">
        <p className='text-black'>{currentYear} -   Copy Right by XYZ</p>
      </div>
    </div>
  )
}

export default Footer