import Footer from "@/components/Footer";
import HeraoSection from "@/components/HeroSection";
import LatestProducts from "@/components/LatestProducts";
import Navigation from "@/components/Navigation";
import SelectByCategory from "@/components/SelectByCategory";
import WhyUs from "@/components/WhyUs";

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
