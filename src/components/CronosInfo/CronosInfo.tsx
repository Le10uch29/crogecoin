import Image from "next/image";
import Link from "next/link";

const CronosInfo = () => {
  return (
    <section>
      {/* Scaleswap */}
      <div className="flex  flex-col-reverse md:flex-row mb-[60px] lg:mb-[80px] xl:mb-[90px] 2xl:mb-[98.8px]">
        <div
          className="flex flex-col gap-[20px] lg:gap-[28px] xl:gap-[32px] 2xl:gap-[35px] 
          md:w-[450px] lg:w-[520px] xl:w-[580px] 2xl:w-[616px] 
          md:mr-[30px] lg:mr-[40px] xl:mr-[50px] 2xl:mr-[55.9px] 
          md:pl-[0px] lg:pl-[5px] pb-[50px] lg:pb-[70px] xl:pb-[75px] 2xl:pb-[80.6px] 
          md:pt-[60px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[96.9px]"
        >
          <h2
            className="mt-[20px] md:mt-0 font-[600] leading-[100%] 
           text-[39.9px] md:text-[63.9px]"
          >
            Scaleswap
          </h2>
          <p
            className="font-[600] 
            md:text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[25.6px]"
          >
            A&nbsp;Cronos swap with efficient tax rules, reducing sell pressure.
            Use Scale to&nbsp;swap CRO for Croge, Scale, and coins
            within&nbsp;the Cronos ecosystem.
          </p>
          <Link
            href="https://scale.crogecoin.com/swap"
            target="_blank"
            className="flex justify-center items-center border-[2px] border-[rgba(0,0,0,1)] bg-[#fff] w-[247.2px] h-[92.8px] text-[29.4px] font-[700] leading-[100%] text-[#000] rounded-[20px] p-2"
          >
            Swap
          </Link>
        </div>

        <div
          className="flex items-center rounded-[30px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px] 
          md:w-[500px] md:max-h-[400px] 
          lg:w-[600px] lg:max-h-[480px] 
          xl:w-[670px] xl:max-h-[540px] 
          2xl:w-[713px] 2xl:max-h-[571.5px]"
        >
          <Image
            src="/img/scaleswap.png"
            width={713}
            height={571.5}
            alt="Scaleswap"
            className="shadow-custom rounded-[50px]"
          />
        </div>
      </div>

      {/* Croge NFTs */}
      <div className="flex flex-col md:flex-row mb-[70px] lg:mb-[90px] xl:mb-[100px] 2xl:mb-[108px]">
        <div
          className="flex items-center rounded-[30px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px] 
          md:w-[500px] md:max-h-[400px] 
          lg:w-[600px] lg:max-h-[480px] 
          xl:w-[670px] xl:max-h-[540px] 
          2xl:w-[713px] 2xl:max-h-[571.5px]"
        >
          <Image
            src="/img/crogeNft.png"
            width={713}
            height={571.5}
            alt="Croge NFTs"
            className="mr-[55.9px] contain shadow-custom rounded-[50px]"
          />
        </div>

        <div
          className="flex flex-col gap-[20px] lg:gap-[28px] xl:gap-[32px] 2xl:gap-[35px] 
          md:w-[450px] lg:w-[520px] xl:w-[580px] 2xl:w-[616px] 
          md:px-[20px] lg:px-[30px] xl:px-[35px] 2xl:px-[40px] 
          pb-[50px] lg:pb-[70px] xl:pb-[75px] 2xl:pb-[80.6px] 
          md:pt-[60px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[96.9px]"
        >
          <h2
            className="mt-[20px] md:mt-0 font-[600] leading-[100%] 
            text-[39.9px] md:text-[63.9px]"
          >
            Croge NFTs
          </h2>
          <p
            className="font-[600] 
            md:text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[25.6px]"
          >
            A&nbsp;Collection of&nbsp;2646 uniquely generated NFTS
            on&nbsp;Ebisu&rsquo;s Bay​, the largest NFT marketplace
            on&nbsp;Cronos. NFTs are available to&nbsp;use in CrogeRiver..
          </p>
          <Link
            href="https://app.ebisusbay.com/collection/cronos/croge-nft"
            target="_blank"
            className="flex justify-center items-center border-[2px] border-[rgba(0,0,0,1)] bg-[#fff] w-[247.2px] h-[92.8px] text-[29.4px] font-[700] leading-[100%] text-[#000] rounded-[20px] p-2"
          >
            Browse
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CronosInfo;
