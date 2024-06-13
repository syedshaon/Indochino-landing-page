import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SeeSuits from "@/components/SeeSuits";
import Speciality from "@/components/Speciality";
// import Slider from "@/components/Slider";
const DynamicSlider = dynamic(() => import("@/components/Slider"));
// import Visit from "@/components/Visit";
const DynamicVisit = dynamic(() => import("@/components/Visit"));
const DynamicLightBox = dynamic(() => import("@/components/YetLightBox"));

// import YetLightBox from "@/components/YetLightBox";
// import Lightbox from "@/components/Lightbox";
const DynamicFooter = dynamic(() => import("@/components/Footer"));
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <Hero />
      <SeeSuits />
      <Speciality />
      <DynamicSlider />
      {/* <Lightbox /> */}
      <DynamicLightBox />
      <DynamicVisit />
      <DynamicFooter />
    </main>
  );
}
