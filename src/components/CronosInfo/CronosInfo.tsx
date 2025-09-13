import Image from "next/image";
import Link from "next/link";

const CronosInfo = () => {
  return (
    <section>
      <div className="flex mb-[98.8px]">
        <div className="flex flex-col gap-[35px] w-[616px] mr-[55.9px] pl-[5px]  pb-[80.6px] pt-[96.9px]">
          <h2 className="text-[63.9px] font-[600] leading-[100%]">Scaleswap</h2>
          <p className="text-[25.6px] font-[600]">
            A&nbsp;Cronos swap with efficient tax rules, reducing sell pressure.
            Use Scale to&nbsp;swap CRO for Croge, Scale, and coins
            within&nbsp;the Cronos ecosystem.
          </p>
          <Link
            href="https://scale.crogecoin.com/swap"
            target="_blank"
            className="flex justify-center items-center border-[1.4px] border-[rgba(0,0,0,1)] bg-[#fff] w-[247.2px] h-[92.8px] text-[29.4px] font-[700] leading-[100%] text-[#000] rounded-[20px] p-2"
          >
            Swap
          </Link>
        </div>
        <div className="shadow-custom rounded-[50px] w-[713px]">
          <Image src="/img/scaleswap.png" width={713} height={571.5} alt="" />
        </div>
      </div>

      <div className="flex mb-[108px]">
        <div className="shadow-custom rounded-[50px] w-[713px]">
          <Image
            src="/img/crogeNft.png"
            width={713}
            height={571.5}
            alt=""
            className=" mr-[55.9px]"
          />
        </div>
        <div className="flex flex-col gap-[35px] w-[616px] px-[40px]  pb-[80.6px] pt-[96.9px]">
          <h2 className="text-[63.9px] font-[600] leading-[100%]">
            Croge NFTs
          </h2>
          <p className="text-[25.6px] font-[600]">
            A&nbsp;Collection of&nbsp;2646 uniquely generated NFTS
            on&nbsp;Ebisu&rsquo;s Bay​, the largest NFT marketplace
            on&nbsp;Cronos. NFTs are available to&nbsp;use in CrogeRiver..
          </p>
          <Link
            href="https://app.ebisusbay.com/collection/cronos/croge-nft"
            target="_blank"
            className="flex justify-center items-center border-[1.4px] border-[rgba(0,0,0,1)] bg-[#fff] w-[247.2px] h-[92.8px] text-[29.4px] font-[700] leading-[100%] text-[#000] rounded-[20px] p-2"
          >
            Browse
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CronosInfo;
