import Contact from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import Hero from "@/features/home/Hero";
import Testimonial from "@/features/home/Testimonial";
import WhyUs from "@/features/home/Whyus";
import Ourservices from "@/features/home/ourservices/Ourservices";
import Image from "next/image";
import Statements from "../features/home/Statements";
import WeAre from "@/components/WeAre";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <Testimonial />
      <Ourservices />
      <WeAre />
      <WhyUs />
      <Contact />
      
    </main>
  );
}
