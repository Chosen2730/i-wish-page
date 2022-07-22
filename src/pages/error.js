import { useEffect } from "react";
import { Link } from "react-router-dom";
import horse from "../images/file.svg";
const Error = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center'>
      <h4 className='font-bold text-5xl sm:text-9xl text-center'>404</h4>
      {/* <img src={horse} alt='' /> */}
      <Link to='/'>
        <button className='py-3 px-6 my-4 rounded-lg bg-[#7805A7] text-sm text-white  w-fit'>
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
