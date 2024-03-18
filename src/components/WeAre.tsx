"use client"
import Statements from "@/features/home/Statements";
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const WeAre = () => {

  useEffect(()=> {
    Aos.init( {duration: 1000 });
   }, []);

  const strategies = [
    {
      title: "The Genesis",
      description:
        " In 2021, a digital institute named DIDI (De-Influencers Digital Instructions) was born out of a shared passion for leveraging technology for education and innovation. Led by visionary founder Toochukwu Paschaline, DIDI aimed to empower individuals with digital skills and knowledge.",
    },
    {
      title: "Evolution into Consultancy",
      description:
        " As DIDI flourished, our founder, Toochukwu Paschaline, keenly observed a growing need within the business community. Many struggled to articulate their ideas effectively, hindering their potential for impact and growth. Recognizing this gap, Paschaline pivoted DIDI's focus towards a new endeavor: business writing consultancy.",
    },
    {
      title: "Our Mission",
      description:
        " With a commitment to empowering individuals and  organizations to communicate their ideas with clarity and conviction, Paschaline's Consult was born in 2022. Our mission remains rooted in Paschaline's vision of enabling people to transform their ideas into tangible articles of change.",
    },
    {
      title: "Embracing Change, Driving Impact",
      description:
        " Since our inception, Paschaline's Consult has evolved into a trusted partner for businesses seeking to enhance their communication strategies. With a blend of expertise, creativity, and dedication, we continue to help our clients unlock the power of their words to drive meaningful change in their industries and beyond.",
    },
  ];
  return (
    <section className="" id="about">
      <div data-aos = "fade-right">
        <div className="bg-mediumShade py-20 px-0 md:px-16 duration-300 transition-all lg:px-36 md:text-start text-center flex flex-col">
          <div className="w-[90%] md:w-full mx-auto">
            <div className="mb-8 inline-block">
              <p className="text-2xl font-bold mb-6">Who we are</p>
              <div className="bg-black h-[1px] w-10"></div>
              {/* ☝this div here is used for the underline☝ */}
            </div>
            <p>
              Welcome to Paschaline's Consult, your premier destination for
              expert educational and business writing consulting services. With
              a dedicated team of seasoned professionals, we specialize in
              crafting compelling and effective documents tailored to your
              specific needs. Whether you're a student seeking assistance with
              CVs and statements of purpose (SOPs), or a business professional
              in need of polished proposals, memos, or pitch decks, we've got
              you covered.
            </p>
          </div>
        </div>

        <Statements />

        <div className="py-20 px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-20 md:py-32 bg-black" data-aos = "fade-right">
          {strategies.map((strategy, index) => (
            <div className="text-center hover:text-white hover:translate-y-1 text-white lg:text-opeqblue lg:transition-all lg:duration-500" key={index}>
              <p className="text-2xl font-bold mb-6">{strategy.title}</p>
              <p>{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeAre;
