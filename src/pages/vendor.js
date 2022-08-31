import { useEffect } from "react";
import call from "../images/call.png";
import mail from "../images/mail.png";
import venue from "../images/venue.png";
import Shared from "../components/shared";
import VendorHero from "../components/vendorHero";
import VendorMid from "../components/vendorMid";
import VendorJoin from "../components/vendorJoin";
import Download from "../components/download";

const Vendor = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Shared>
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0 py-8'>
        <VendorHero />
        <VendorMid />
        <VendorJoin />
        <Download />
      </div>
    </Shared>
  );
};

export default Vendor;
