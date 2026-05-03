import Footer from "@/components/Footer";
import HeraoSection from "@/components/homeSection/HeroSection";
import LatestProducts from "@/components/homeSection/LatestProducts";
import Navigation from "@/components/header/Navigation";
import SelectByCategory from "@/components/homeSection/SelectByCategory";
import WhyUs from "@/components/homeSection/WhyUs";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <HeraoSection />
        <WhyUs />
        <SelectByCategory />
        <LatestProducts />
        <Footer />
      </div>
    </>
  );
}
