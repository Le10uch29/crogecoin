import Image from "next/image";
import { FaTelegram, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";

const CrogecoinFooter = () => {
  return (
    <footer className="pl-[55px]">
      <div className="flex mb-[30px]">
        <h2 className="text-[69.3px] font-[600] leading-[100%] mr-[22.5px]">
          Why Cronos?
        </h2>
        <Image src="/svg/logoFooter.svg" alt="" width={51} height={51} />
      </div>
      <p className="text-[25.6px] font-[600]  mb-[185px]">
        Crypto.com serves over 10&nbsp;million customers with their crypto app,
        recognized as&nbsp;the world&rsquo;s fastest growing. They acquired
        rights to&nbsp;the LA&nbsp;Lakers stadium and are primary sponsors for
        prestigious events like the World Cup, F1, and UFC. Cronos aims
        to&nbsp;dominate DeFi TVL and be&nbsp;a top 5&nbsp;public blockchain
        by&nbsp;year-end through superior infrastructure, interoperability, and
        expanding in&nbsp;DeFi, Metaverse, GameFi, and NFTs.
      </p>
      <div className="flex pr-[111.4px]">
        <p className="text-[25.6px] font-[500] mr-[20px]">
          All rights reserved Copyright &copy;&nbsp;2025 crogecoin.com
        </p>
        <ul className="flex gap-[16.9px] ml-[auto]">
          <li className="relative border-[1.4px] border-[#000] rounded-full flex justify-center items-center w-[53.1] h-[53.1px]">
            <span className="absolute top-[1px] left-[1px] bg-[#fff] w-[47px] h-[47px] rounded-full -z-[999]"></span>
            <FaTelegram className="text-[rgba(0,166,43,1)] w-[53.1px] h-[53.05px]" />
          </li>
          <li className="relative border-[1.4px] border-[#000] rounded-full flex justify-center items-center w-[53.1] h-[53.1px] bg-[rgba(0,166,43,1)]">
            <TfiTwitterAlt className=" w-[29.21px] h-[23.5px]" />
          </li>
          <li className="relative border-[1.4px] border-[#000] rounded-full flex justify-center items-center w-[53.1] h-[53.1px] bg-[rgba(0,166,43,1)]">
            <FaFacebookF className="w-[13.5px] h-[29.5px]" />
          </li>
          <li className="relative border-[1.4px] border-[#000] rounded-full flex justify-center items-center w-[53.1] h-[53.1px] bg-[rgba(0,166,43,1)]">
            <FaInstagram className="w-[26.49px] h-[26.65px]" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default CrogecoinFooter;
