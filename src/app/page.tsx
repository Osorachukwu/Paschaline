import Contact from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import Hero from "@/features/home/Hero";
import WhyUs from "@/features/home/Whyus";
import Ourservices from "@/features/home/ourservices/Ourservices";
import Image from "next/image";
import Statements from "../features/home/Statements";
import Gallery from "@/components/Gallery";
import AltGallery from "@/components/AltGallery";
import ImpactStats from "@/features/home/ImpactStats";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <Ourservices />
      <AboutUs />
      <WhyUs />
      <Contact />
      
    </main>
  );
}
