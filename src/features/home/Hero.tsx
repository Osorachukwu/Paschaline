import React from "react";
import Image from "next/image";
import paschalinePhoto from "@/assets/paschalineTwo.png";
import styles from "./hero.module.css";
import logo from "@/assets/logo.jpg";
import Homenav from "./Homenav";

const Hero: React.FC = () => {
  return (
    <section className="container px-4 mx-auto bg-red-400 h-[95vh]">
      {/* 💥for both columns */}
      <div className="h-full flex">
        {/* 👇for the column-1 ie text */}
        <div className="flex justify-end flex-col bg-green-300 h-full w-full pb-20">
          <div className="">
            <p className="text-3xl font-bold">Paschaline Creatives and Consult</p>
            <p>
              At Paschaline's Consult, we understand the importance of
              communication and presentation in achieving your goals, which is
              why we are committed to delivering high-quality, customized
              solutions that resonate with your audience and drive results.
            </p>
          </div>
        </div>
        {/* ☝for the column-1 ie text */}

        {/* 👇for the column-2 ie photo */}
        <div className="w-full bg-black hidden md:block">
          <Image
            src={paschalinePhoto}
            alt="Paschaline's photograph"
            className="h-full"
          />
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
