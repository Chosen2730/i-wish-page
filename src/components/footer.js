import React from "react";
import google from "../images/google.png";
import app from "../images/app.png";
import star1 from "../images/star1.png";
import star3 from "../images/star3.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ig from "../images/ig.png";
import tik from "../images/tik.png";

const Footer = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='bg-[#7805A7] relative p-12 py-36 rounded-3xl flex flex-col justify-center items-center my-5'>
        <img
          className='absolute w-32 md:w-48 top-0 right-0 rounded-xl'
          src={star1}
          alt=''
        />
        <h2 className='text-[#FFCC00] font-bold text-2xl md:text-5xl text-center'>
          Download the App
        </h2>
        <p className='my-5 text-sm md:text-2xl text-purple-100 text-center'>
          Start creating unlimited wishlist by downloading the app now
        </p>
        <div className='grid grid-cols-2 items-center space-x-4'>
          <img src={google} className='w-fit h-12 object-cover' alt='' />
          <img src={app} className='w-fit h-12 object-cover' alt='' />
        </div>
      </div>
      <div>
        <div className='flex space-x-8 items-center justify-center my-10 cursor-pointer'>
          <a href='https://vm.tiktok.com/ZMN5PGyRv/'>
            <img src={tik} alt='' className='w-8' />{" "}
          </a>
          <a href='https://twitter.com/iwish__app?s=21&t=GG38Ldi9IcSnetVGazTBBA'>
            <img src={twitter} alt='' className='w-8' />
          </a>
          <a href='https://www.instagram.com/iwish_app/'>
            <img src={ig} alt='' className='w-8' />
          </a>
          <a href='https://www.youtube.com/'>
            <img src={youtube} alt='' className='w-8' />
          </a>
        </div>

        <div className='flex justify-center capitalize gap-8 my-10 text-xs md:text-base font-bold text-gray-900 cursor-pointer'>
          <a href=''>Faq</a>
          <a href=''>Privacy</a>
          <a href=''>Contact us</a>
          <a href=''>become a vendor</a>
        </div>
      </div>

      <p className='text-center text-xs md:text-base my-4'>
        {" "}
        &copy; {new Date().getFullYear()} i-wish Mobile App
      </p>
      <img
        className='absolute w-40 sm:w-[60%] lg:w-[40%] -bottom-12 -left-64 rounded-xl'
        src={star3}
        alt=''
      />
    </div>
  );
};

export default Footer;
