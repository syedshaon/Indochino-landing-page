import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SeeSuits from "@/components/SeeSuits";
import Speciality from "@/components/Speciality";
import Slider from "@/components/Slider";
import Visit from "@/components/Visit";
import Lightbox from "@/components/Lightbox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <SeeSuits />
      <Speciality />
      <Slider />
      <Lightbox />
      <Visit />
      <Footer />
    </main>
  );
}
