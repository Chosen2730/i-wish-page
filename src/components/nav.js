import { useState } from "react";
import logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className='py-4 shadow-md w-full'>
      <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between  md:items-center'>
        <div className='flex justify-between items-center'>
          <img className='w-20 object-contain' src={logo} alt='logo' />
          <i
            className='md:hidden bg-[#7805A7] text-white p-2 rounded-sm text-xl'
            onClick={() => setNav(!nav)}
          >
            {nav ? <IoClose className='' /> : <FiMenu className='' />}
          </i>
        </div>
        <div
          className={`${
            nav ? "" : "hidden"
          }  md:flex flex-col md:flex-row text-base md:items-center space-y-6 md:space-y-0 my-4 md:space-x-5 text-gray-700`}
        >
          <h4>Home</h4>
          <h4>Feature</h4>
          <h4>Contact Us</h4>
          <h4>Become a Vendor</h4>
        </div>

        <button
          className={`${
            nav ? "" : "hidden"
          } md:block bg-[#7805A7] w-fit transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-md text-purple-50 font-semibold py-4`}
        >
          Download App
        </button>
      </div>
    </nav>
  );
};

export default Nav;
