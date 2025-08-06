"use client";
import React, { useEffect } from "react";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import ITConsult from "@/assets/servicesImgs/IT-consulting.jpg";
import businessProposal from "@/assets/servicesImgs/business-proposal.jpg";
import copywriting from "@/assets/servicesImgs/copywritting.jpg";
import emailMarketing from "@/assets/servicesImgs/email-marketing.jpg";
import socialMediaMarketing from "@/assets/servicesImgs/social-media-marketing.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Ourservices: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const services: Service[] = [
    {
      icon: <SquarePen size={30} />,
      title: "Professional Writing Services:",
      description:
        "Expertly crafted documents, including CVs, personal statements, letters of intent, and business plans.",
    },
    {
      icon: <SquarePen size={30} />,
      title: "Academic Writing:",
      description: "High-quality theses, research papers, and dissertations.",
    },
    {
      icon: <SquarePen size={30} />,
      title: "Grant Writing:",
      description:
        "Well-structured grant proposals to increase funding chances.",
    },
    {
      icon: <SquarePen size={30} />,
      title: "Scholarship Applications:",
      description:
        "Personalized support for underserved youth applying for scholarships.",
    },
    {
      icon: <SquarePen size={30} />,
      title: "Standard Operating Procedures (SOPs): ",
      description: "Customized SOPs for businesses and organizations.",
    },
  ];

  // let boxShaa = "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px";

  return (
    <section className="w-full my-4" id="services">
      <div className="container px-4 mx-auto lg:px-40 xl:px-72 py-10">
        <div className="py-2 text-xl" data-aos="fade-up">
          <div>
            <p className="font-bold text-center mb-6 underline">Our Services</p>
            <p className="text-2xl text-center mb-6">
              Our business expert writting services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 xl:gap-8 ">
            {services.map((service, index) => (
              <div
                className="flex flex-col gap-1 p-5 mb-2 rounded-md shadow-md border"
                key={index}
              >
                <p>{service.icon}</p>
                <p className="text-lg font-bold">{service.title}</p>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Carousel 👇 */}

      {/* <div
        className="carousel carousel-center gap-4 bg-[#BDBFC1] lg:py-6 lg:mx-16"
        data-aos="fade-up">
        <div className="carousel-item">
          <Image src={ITConsult} alt="test" />
        </div>
        <div className="carousel-item">
          <Image src={businessProposal} alt="test" />
        </div>
        <div className="carousel-item">
          <Image src={socialMediaMarketing} alt="test" />
        </div>
        <div className="carousel-item">
          <Image src={copywriting} alt="test" />
        </div>
        <div className="carousel-item">
          <Image src={emailMarketing} alt="test" />
        </div>
      </div> */}
      <div className="rounded-md overflow-hidden px-1">
        <video
          className="w-full h-full object-cover rounded-md"
          autoPlay
          loop
          muted
          controls
        >
          <source
            src="/WhatsApp Video 2025-08-05 at 21.57.35_70fa0976.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Ourservices;

// paschalinesGitHub2024
