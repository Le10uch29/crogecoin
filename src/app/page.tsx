import CoinCarousel from "@/components/CoinCarousel/CoinCarousel";
import CrogecoinHero from "@/components/CrogecoinHero/CrogecoinHero";
import CrogecoinHeader from "@/components/shared/CrogecoinHeader";

export default function Home() {
  return (
    <div className="relative z-[555] container">
      <CrogecoinHeader />
      <span className="absolute border-[1.4px] border-[#fff] bg-[#fff] top-[760px] left-0 w-full -z-[10]"></span>
      <CrogecoinHero />
      <CoinCarousel />
    </div>
  );
}
