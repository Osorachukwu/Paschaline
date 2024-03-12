import Contact from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import Hero from "@/features/home/Hero";
import Testimonial from "@/features/home/Testimonial";
import WhyUs from "@/features/home/Whyus";
import Ourservices from "@/features/home/ourservices/Ourservices";
import Image from "next/image";
import Statements from "../features/home/Statements";

export default function Home() {
  return (
    <main className="">
      <div></div>
      {/* <Hero />
      <Testimonial />
      <Ourservices />
      <Contact />
      <WhyUs /> */}
      <Statements />

    </main>
  );
}
