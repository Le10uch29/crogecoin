"use client";
import Image from "next/image";

const images = [
  { src: "/img/CoinGecko.png", width: 258.36, height: 52.26 },
  { src: "/img/coinMarketCap.png", width: 317, height: 54.61 },
  { src: "/img/xt.png", width: 211.28, height: 59.49 },
  { src: "/img/mmf.png", width: 147.97, height: 54.92 },
  { src: "/img/vvs.png", width: 289.85, height: 59.49 },
  { src: "/img/mexc.png", width: 199.84, height: 61.78 },
  { src: "/img/lbank.png", width: 206.71, height: 47.29 },
  { src: "/img/bitmart.png", width: 213.57, height: 61.02 },
];

const CoinCarousel = () => {
  return (
    <div className="z-[555] bg-transparent h-[80px] overflow-x-visible">
      <div className="flex w-max animate-scroll gap-[65px] h-full items-center">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex items-center">
            <Image
              src={img.src}
              alt={`logo-${i}`}
              width={img.width}
              height={img.height}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCarousel;
