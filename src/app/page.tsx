import HeroSection from "@/components/heroSection";
import AboutUs from "@/components/aboutUs";
import MyProject from "@/components/myprojects";


export default function Home() {
  return (
    <div className="mr-[10%] ml-[10%]">
      <HeroSection />
      <AboutUs />
      {/* <MyProject /> */}
    </div>

  );
}
