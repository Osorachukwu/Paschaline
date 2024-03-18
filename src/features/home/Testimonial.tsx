"use client";
import React, { useEffect } from "react";
import styles from "./testimonial.module.css";
import { Handshake } from "lucide-react";
import { LineChart } from "lucide-react";
import { Briefcase } from "lucide-react";
import { SquarePen } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="pt-8 sm:pt-0">
      <div className={styles.mobilecontainer} data-aos="fade-up">
        <div className={styles.titlee}>
          <p>
            We've Helped <br /> Thousands Of Graduates <br /> Start Rewarding
            Writing Careers.
          </p>
        </div>

        <div className="flex justify-end">
          <div className={styles.content}>
            <div className={styles.contentOne}>
              <p style={{ fontWeight: "bold" }}>30M</p>
              <p>Demand for tech professionals in writing by 2030</p>
            </div>

            <div className={styles.contentTwo}>
              <p style={{ fontWeight: "bold" }}>85%</p>
              <p>Job offer letters through our CV's</p>
            </div>

            <div className={styles.contentThree}>
              <p style={{ fontWeight: "bolder" }}>93%</p>
              <p>Grant -Winning proposals</p>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Desktop 👇 */}

      <div className="text-xl hidden sm:block mx-[5%] -mt-8 md:mx-[15%]" data-aos="fade-up">
        <div className="grid grid-cols-4 gap-1 md:gap-2">
          <div className="p-2 text-logoborder-b-logoBlue bg-logoBlue text-white shadow-md border-2 py-6 rounded-md text-2xl">
            <p>
              We've Helped <br /> Thousands Of <br /> Graduates <br /> Start
              Rewarding Writing Careers.
            </p>
          </div>

          <div className="px-6 bg-white  py-6 rounded-sm shadow-md border-b-logoBlue border-b-8 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-mediumShade inline-block p-2 rounded-sm">
              <LineChart size={40} className="text-logoBlue" />
            </div>

            <p className="mt-1">
              <span className="font-bold">30M</span> <br /> Demand for tech{" "}
              <br /> professionals in
              <br />
              writing by 2030
            </p>
          </div>

          <div className="px-6 bg-white  py-6 rounded-sm shadow-md border-b-logoBlue border-b-8 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-mediumShade inline-block p-2 rounded-sm ">
              <Briefcase size={40} className="text-logoBlue" />
            </div>

            <p className="mt-1">
              <span className="text-xl font-bold">93%</span> <br /> Job offer
              letters <br /> through our CV's
            </p>
          </div>

          {/*  */}

          <div className="px-6 bg-white  py-6 rounded-sm shadow-md border-b-logoBlue border-b-8 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-mediumShade inline-block p-2 rounded-sm ">
              <Handshake className=" text-logoBlue" size={40} />
            </div>

            <p className="mt-1">
              <span className="text-xl font-bold">90%</span> <br /> Grant
              -Winning <br /> proposals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
