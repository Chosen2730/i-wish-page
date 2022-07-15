import { useEffect } from "react";
import Hero from "../components/hero";
import Center from "../components/center";
import Download from "../components/download";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0'>
      <Hero />
      <Center />
      <Download />
    </div>
  );
};

export default Home;
