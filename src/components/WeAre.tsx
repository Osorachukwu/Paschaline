"use client";
import Statements from "@/features/home/Statements";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WeAre = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
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
      <div>
        <div className="bg-mediumShade py-20 px-0 md:px-16 duration-300 transition-all lg:px-36 md:text-start text-center flex flex-col">
          <div className="w-[90%] md:w-full mx-auto">
            <div className="mb-8 inline-block" data-aos="fade-right">
              <p className="text-2xl font-bold mb-6">Who we are</p>
              <div className="bg-black h-[1px] w-10"></div>
              {/* ☝this div here is used for the underline☝ */}
            </div>
            <div data-aos="fade-right" className="space-y-4 ">
              <p>
                Pascaline&apos;s Consult operates on a dual platform. Our business
                wing, focused on strategy and development, crafts compelling
                documents that drive business growth. Our impact wing empowers
                underserved youth by providing guidance and support in securing
                scholarships, enabling them to access quality education and
                thrive in a nurturing environment.
                {/* Welcome to Paschaline&apos;s Consult, your premier destination for
              expert educational and business writing consulting services. With
              a dedicated team of seasoned professionals, we specialize in
              crafting compelling and effective documents tailored to your
              specific needs. Whether you&apos;re a student seeking assistance with
              CVs and statements of purpose (SOPs), or a business professional
              in need of polished proposals, memos, or pitch decks, we&apos;ve got
              you covered. */}
              </p>
              <p>
                Pascaline&apos;s Consult is committed to bridging the opportunity
                divide for 300,000 underserved Nigerian youths by 2050. Through
                strategic partnerships with local and international
                organizations, we provide sponsorship and support for education
                and career advancement. Our expertise in developing compelling
                content enables these young people to access better
                opportunities, driving meaningful impact and contributing to
                Nigeria&apos;s socio-economic development.
              </p>
            </div>
            {/* Accordion daisy */}
            <div className="space-y-1 mt-6">
              <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">
                  The Challenge
                </div>
                <div className="collapse-content text-sm">
                  In many communities, limited access to quality education can
                  have far-reaching consequences. Girls may face harassment and
                  exploitation, while boys may be drawn into cultism and other
                  negative behaviours. Without education, individuals are more
                  vulnerable to poverty, inequality, and social injustice.
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Our Solution</div>
                <div className="collapse-content text-sm">
                  At Pascaline&apos;s Consult, we&apos;re committed to breaking these
                  cycles by helping this youth write their stories to their
                  helpers (organizations), which have the capacity to sponsor
                  their education and remove them from the streets.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">
                  Our initiatives include:
                </div>
                <div className="collapse-content text-sm space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Observing Open Scholarship programs for each month and
                      helping them register in their various fields of interest.
                    </li>
                    <li>
                      Skills training and vocational programs to help them
                      prepare for university life through scholarship awareness
                      bootcamps
                    </li>
                    <li>Content creation and mentorship support </li>
                  </ul>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Our Impact</div>
                <div className="collapse-content text-sm space-y-2">
                  <p>
                    By bridging the gap, we contribute to helping enhance
                    education and opportunities, and we&apos;re helping to build more
                    equitable and prosperous communities.
                  </p>
                  <p>
                    Our goal is to create a brighter future for all, where every
                    individual can thrive and reach their full potential
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* osora&apos;s */}

        <Statements />

        <div className="py-20 px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-20 md:py-32 bg-black">
          {strategies.map((strategy, index) => (
            <div
              className="text-center hover:text-white hover:translate-y-1 text-white lg:text-opeqblue lg:transition-all lg:duration-500"
              key={index}
              data-aos="fade-right"
            >
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
