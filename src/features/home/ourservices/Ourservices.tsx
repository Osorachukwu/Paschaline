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
      title: "CV Writing:",
      description:
        "Stand out from the crowd with a professionally crafted curriculum vitae that highlights your achievements and qualifications.",
    },
    {
      icon: <SquarePen size={30} />,
      title: "Proposals:",
      description:
        "Whether you're pitching a project, seeking funding, or submitting a business proposal, we'll ensure your document is clear, concise, winning and impactful.",
    },
    // {
    //   icon: "🧑",
    //   title: "Website content",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // },
    // {
    //   icon: "🧑",
    //   title: "Blog writing",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // }
    // {
    //   icon: "🧑",
    //   title: "Article writing",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // },
    // {
    //   icon: "🧑",
    //   title: "Product description",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // },
  ];

  let boxShaa = "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px";

  return (
    <section className="w-full my-10">
      <div className="container px-4 mx-auto lg:px-40 xl:px-72 py-16">
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
                className="flex flex-col gap-1 p-5 mb-2 rounded-md bg-mediumShade boxShadowLine"
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

      <div
        className="carousel carousel-center gap-4 bg-[#BDBFC1] py-6 mx-16"
        data-aos="fade-up"
      >
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
      </div>
    </section>
  );
};

export default Ourservices;

// paschalinesGitHub2024
