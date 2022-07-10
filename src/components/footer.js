import React from "react";
import google from "../images/google.png";
import app from "../images/app.png";
import star1 from "../images/star1.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ig from "../images/ig.png";
import telegram from "../images/telegram.png";

const Footer = () => {
  return (
    <div>
      <div className='bg-[#7805A7] relative p-12 flex flex-col justify-center items-center rounded-xl my-5'>
        <img
          className='absolute w-20 sm:w-32 top-0 right-0 rounded-xl'
          src={star1}
          alt=''
        />
        <h2 className='text-[#FFCC00] font-bold text-2xl'>Download the App</h2>
        <p className='my-5 text-sm text-purple-100'>
          Start creating unlimited wishlist by downloading the app now
        </p>
        <div className='grid grid-cols-2 items-center space-x-4'>
          <img src={google} className='w-28' alt='' />
          <img src={app} className='w-28' alt='' />
        </div>
      </div>
      <div>
        <div className='flex space-x-4 items-center justify-center my-10 cursor-pointer'>
          <a href=''>
            <img src={telegram} alt='' className='w-6' />{" "}
          </a>
          <a href=''>
            <img src={twitter} alt='' className='w-6' />
          </a>
          <a href=''>
            <img src={ig} alt='' className='w-6' />
          </a>
          <a href=''>
            <img src={youtube} alt='' className='w-6' />
          </a>
        </div>

        <div className='flex justify-center capitalize gap-4 my-10 text-xs font-bold text-gray-800 cursor-pointer'>
          <a href=''>Faq</a>
          <a href=''>Privacy</a>
          <a href=''>Contact us</a>
          <a href=''>become a vendor</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
