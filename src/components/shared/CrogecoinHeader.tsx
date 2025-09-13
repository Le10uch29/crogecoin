"use client";
import Link from "next/link";
import Image from "next/image";

const CrogecoinHeader = () => {
  return (
    <div className="flex justify-between items-center mb-[82.9px] w-full">
      <p className="text-[64.2px] font-[600] leading-[100%]">crogecoin</p>
      <Link
        href="https://coinmarketcap.com/currencies/crogecoin/"
        target="_blank"
        rel="noopener noreferrer"
        className="group cursor-pointer border-[2px] border-[rgba(0,0,0,1)] bg-[#ffffff] pl-[19.4px] pt-[26.2px] pb-[22.6px] pr-[61.1px] flex items-center rounded-[20px]"
      >
        <div className="border-[2px] border-[rgba(0,0,0,1)] rounded-full bg-[#00A62B] p-[9.5px] mr-[40px] transition-transform duration-300 ease-in-out group-hover:scale-105">
          <Image
            src="/svg/hero-logo-1.svg"
            alt="hero logo"
            width={35}
            height={32}
          />
        </div>
        <p className="text-[rgba(0,0,0,1)] font-[700] text-[29.4px] leading-[100%] transition-transform duration-300 ease-in-out group-hover:scale-105">
          NFTS
        </p>
      </Link>
    </div>
  );
};

export default CrogecoinHeader;
