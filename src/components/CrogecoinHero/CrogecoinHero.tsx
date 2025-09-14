import Link from "next/link";
import CopyAddress from "../ui/CopyAddress";
import Image from "next/image";
import { BiLogoTelegram } from "react-icons/bi";
import FloatingStars from "../ui/FloatingStars";

const CrogecoinHero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between">
      <div className="flex flex-col mr-[20px]">
        {/* Заголовок */}
        <span
          className="text-[#8be89c] font-[700] leading-[100%] 
        mb-[30px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[21px]"
        >
          MEET CROGE
        </span>

        {/* Контейнер */}
        <div className="flex  mb-[80px] lg:mb-[100px] xl:mb-[110px] 2xl:mb-[127.55px]">
          {/* Левая часть */}
          <div
            className="flex flex-col  md:items-start 
          md:w-[500px] lg:w-[600px] xl:w-[680px] 2xl:w-[720px]"
          >
            <div className="mb-[20px] xl:mb-[26.2px] h-full">
              <h1
                className="font-[700] leading-[100%] mb-[30px] 
              text-[30px] md:text-[60px] lg:text-[75px] xl:text-[85px] 2xl:text-[93px] text-[#FFF]"
              >
                The&nbsp;Cronos &nbsp;Mascot
              </h1>
              <p
                className="font-[600] w-[300px] sm:w-[400px]  md:w-full leading-[120%] mb-[40px] xl:mb-[74.7px]
              md:text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[25.6px] text-center text-[#FFF]"
              >
                Crogecoin is an open source, peer-to-peer digital asset on the
                cronos blockchain, favored by reptiles worldwide
              </p>
              <CopyAddress />
            </div>

            <div className="flex items-center justify-center md:justify-start relative">
              <Link
                href="https://coinmarketcap.com/currencies/crogecoin/"
                className="group border-[2px] border-[rgba(0,0,0,1)] bg-[#ffffff] pl-[9.4px] pt-[13.2px] pb-[10.6px] pr-[33.1px] md:pl-[19.4px] md:pt-[26.2px] md:pb-[22.6px] md:pr-[48.1px] flex items-center rounded-[10px] md:rounded-[20px] mr-[23px]"
              >
                <div className="border-[2px] w-[32px] h-[32px] md:w-[53.1px] md:h-[53.05px] border-[rgba(0,0,0,1)] rounded-full bg-[#00A62B] px-[5px] py-[10px] mr-[20.6px] md:px-[9px] md:py-[20px] md:mr-[39.6px] transition-transform duration-300 ease-in-out group-hover:scale-105">
                  <Image
                    src="svg/Vector.svg"
                    alt="hero logo"
                    width={34.2}
                    height={13.2}
                  />
                </div>
                <p className="text-[rgba(0,0,0,1)] font-[700] text-[14.4px] md:text-[29.4px] leading-[100%] transition-transform duration-300 ease-in-out group-hover:scale-105">
                  Chart
                </p>
              </Link>
              <Link
                href="https://t.me/crogecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer border-[2px] 
                border-white bg-[linear-gradient(90deg,rgba(47,137,113,0.5)_0%,rgba(91,162,60,0.5)_50%,rgba(159,190,34,0.5)_100%)] backdrop-blur-[5px] 
                pl-[10.6px] pt-[10.2px] pb-[10.6px] pr-[13.8px] flex items-center rounded-[10px] md:pl-[16.6px] md:pt-[26.2px] md:pb-[22.6px] md:pr-[19.8px] md:flex md:items-center md:rounded-[20px]"
              >
                <div className="border-[2px] border-black w-[32px] h-[32px] md:w-[53.1px] md:h-[53.05px] rounded-full bg-[#2476E7] mr-[10px] md:mr-[17.3px] transition-transform duration-300 ease-in-out group-hover:scale-105 flex items-center justify-center">
                  <BiLogoTelegram className="text-white  w-[21.69px] h-[17.57px] md:w-[30.69px] md:h-[30.57px]" />
                </div>
                <p className="text-white font-[700] text-[14.4px] md:text-[29.4px] leading-[100%] transition-transform duration-300 ease-in-out group-hover:scale-105">
                  Telegram
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative overflow-visible mb-[40px] md:mb-0
                   w-[250px] h-[225px]
                  md:w-[500px] md:h-[450px] 
                 lg:w-[580px] lg:h-[520px] 
            xl:w-[610px] xl:h-[550px] 
             2xl:w-[677.82px] 2xl:h-[615.45px]
             bg-[url('/svg/hero-logo-1.svg')] bg-contain bg-no-repeat bg-center"
      >
        <FloatingStars />
      </div>
    </div>
  );
};

export default CrogecoinHero;
