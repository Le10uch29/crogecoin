import CoinCarousel from "@/components/CoinCarousel/CoinCarousel";
import CrogecoinHero from "@/components/CrogecoinHero/CrogecoinHero";
import CronosInfo from "@/components/CronosInfo/CronosInfo";
import CrogecoinFooter from "@/components/shared/CrogecoinFooter";
import CrogecoinHeader from "@/components/shared/CrogecoinHeader";

export default function Home() {
  return (
    <>
      <div className="relative z-[555] container overflow-x-hidden">
        <CrogecoinHeader />
        <CrogecoinHero />
        <CoinCarousel />
      </div>
      <div className="mt-[124.22px] container">
        <CronosInfo />
        <CrogecoinFooter />
      </div>
    </>
  );
}
