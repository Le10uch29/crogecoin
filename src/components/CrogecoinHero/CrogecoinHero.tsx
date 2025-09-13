import Link from "next/link";
import CopyAddress from "../ui/CopyAddress";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import FloatingStars from "../ui/FloatingStars";

const CrogecoinHero = () => {
  return (
    <div className="flex flex-col">
      <span className="mb-[23.9px] text-[21px] font-[700] text-[#8be89c] leading-[100%] mb-[57.3px]">
        MEET CROGE
      </span>
      <div className="flex mb-[127.55px] justify-between">
        <div className="flex flex-col items-start mr-[76.9px] w-[720px]">
          <div className="mb-[26.2px]">
            <h1 className="text-[93px] font-[700] mb-[41px] leading-[100%]">
              The Cronos
              <br /> Mascot
            </h1>
            <p className="text-[25.6px] font-[600] leading-[100%] mb-[74.7px]">
              Crogecoin is an open source, peer-to-peer digital asset on the
              cronos blockchain, favored by reptiles worldwide
            </p>
            <CopyAddress />
          </div>
          <div className="flex items-center justify-start relative">
            <Link
              href="https://coinmarketcap.com/currencies/crogecoin/"
              className="group cursor-pointer border-[1.4px] border-[rgba(0,0,0,1)] bg-[#ffffff] pl-[19.4px] pt-[26.2px] pb-[22.6px] pr-[48.1px] flex items-center rounded-[20px] blank-target mr-[23px]"
            >
              <div className="border-[1.4px] border-[rgba(0,0,0,1)] rounded-full bg-[#00A62B] px-[9px] py-[20px] mr-[39.6px] transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="svg/Vector.svg"
                  alt="hero logo"
                  width={34.2}
                  height={13.2}
                />
              </div>
              <p className="text-[rgba(0,0,0,1)] font-[700] text-[29.4px] leading-[100%] transition-transform duration-300 ease-in-out group-hover:scale-105">
                Chart
              </p>
            </Link>
            <Link
              href="https://t.me/crogecoin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer border-[1.4px] border-white bg-[linear-gradient(90deg,rgba(47,137,113,0.5)_0%,rgba(91,162,60,0.5)_50%,rgba(159,190,34,0.5)_100%)] backdrop-blur-[5px] pl-[16.6px] pt-[26.2px] pb-[22.6px] pr-[19.8px] flex items-center rounded-[20px]"
            >
              <div className="border-[1.4px] border-black rounded-full bg-white mr-[17.3px] transition-transform duration-300 ease-in-out group-hover:scale-105 flex items-center justify-center">
                <FaTelegram className="text-[#2476E7] w-[53.1px] h-[53.05px]" />
              </div>
              <p className="text-white font-[700] text-[29.4px] leading-[100%] transition-transform duration-300 ease-in-out group-hover:scale-105">
                Telegram
              </p>
            </Link>
          </div>
        </div>
        <div className="relative w-[677.82px] h-[615.45px]">
          <Image
            src="/svg/hero-logo-1.svg"
            alt="hero logo"
            width={677.82}
            height={615.45}
            className="w-full h-full object-contain"
          />
          <FloatingStars />
        </div>
      </div>
    </div>
  );
};

export default CrogecoinHero;
