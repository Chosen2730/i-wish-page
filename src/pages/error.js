import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='min-h-[80vh] flex flex-row justify-center items-center'>
      <h4 className='font-bold text-3xl'>404 | Page Not Found</h4>
    </div>
  );
};

export default Error;
