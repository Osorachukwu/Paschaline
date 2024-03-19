'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import paschalinePhoto from "@/assets/look.png";
import styles from "./hero.module.css";
// import logo from "@/assets/logo.jpg";
import Homenav from "./Homenav";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Hero: React.FC = () => {

  useEffect(()=> {
    Aos.init( {duration: 1000 });
   }, []);
   

  return (
    <section className={` ${styles.heroBg} h-[80vh] heroBg`}>
      {/* 💥for both columns */}
      <div className="container h-full px-4 mx-auto flex">
        {/* 👇for the column-1 ie text */}
        <div className="flex justify-end flex-col h-full w-full pb-20 md:pb-36 text-white">
          <div className=""  data-aos = "fade-right">
            <p className="text-3xl font-bold mb-3">
              Paschaline&apos;s Consult
            </p>
            <p className="text-lg">
              At Paschaline&apos;s Consult, we understand the importance of
              communication and presentation in achieving your goals, which is
              why we are committed to delivering high-quality, customized
              solutions that resonate with your audience and drive results.
            </p>
          </div>
        </div>
        {/* ☝for the column-1 ie text */}

        {/* 👇for the column-2 ie photo */}
        <div className="w-full hidden md:block mt-20 lg:mt-0">
          <div className="">
            <Image
              src={paschalinePhoto}
              alt="Paschaline&apos;s photograph"
              className=""
            />
          </div>
        </div>
        {/* ☝for the column-2 ie photo */}

        {/* 👇Logo */}
        {/* <div className="h-20 w-20 absolute top-20 left-10">
          <Image src={logo} alt="" />
        </div> */}
        {/* ☝Logo */}

        {/* 👇The navBar & hambourger */}
        {/* <Homenav /> */}
        {/* ☝The navBar & hambourger */}
      </div>
      {/* 💥for both columns */}
    </section>
  );
};

export default Hero;



