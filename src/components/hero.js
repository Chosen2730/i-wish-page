import React from "react";
import circle from "../images/circle.png";
import phone from "../images/phone.png";

const Hero = () => {
  return (
    <div className='text-gray-900 py-8 grid sm:grid-cols-2 gap-6 items-center my-12'>
      <div>
        <h1 className='font-bold text-3xl sm:text-5xl'>
          Creating <span className='text-[#7805A7]'>wishlists</span> has never
          been easier
        </h1>
        <p className='text-sm my-2'>
          An intuitive gift-sharing app made for- the one who wishes, the one
          who grants the wish, and the vendor who has the wished items in his
          store
        </p>
        <h2 className='text-xl font-bold my-2 mt-5'>Subscribe</h2>
        <form
          action=''
          className='bg-gray-200 p-2 rounded-md flex items-center'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type='email'
            className='w-full bg-transparent p-2'
            placeholder='enter your email address'
          />
          <input
            className='w-fit bg-[#7805A7] capitalize font-bold p-3 transition hover:bg-purple-900 hover:scale-105 px-4 text-sm rounded-md text-purple-50'
            type='submit'
            value='subscribe'
          />
        </form>
      </div>
      <div className='relative p-2 w-full h-full flex justify-center items-center -mt-10 sm:mt-0'>
        <img className='w-52' src={phone} alt='' />
        <img className='absolute w-96 top-20 -z-10' src={circle} alt='' />
      </div>
    </div>
  );
};

export default Hero;
