import React from "react";
import Form from "./Form";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import styles from "./contact.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
  const contactDetails = [
    {
      icon: <Phone />,
      detail: "+(234) 81-3551-0975 ",
      contactLink: "tel:+(234) 81-3551-0975 ",
    },
    {
      icon: <Phone />,
      detail: "+(234) 80-2800-5847 ",
      contactLink: "tel:+(234) 80-2800-5847 ",
    },
    {
      icon: <Mail />,
      detail: "paschalinescreativesandconsult@gmail.com",
      contactLink: "mailto:paschalinescreativesandconsult@gmail.com",
    },
    {
      icon: <MapPin />,
      detail: "example@email.com",
      contactLink: "example@email.com",
    }
  ];

  return (
    <section
      className="container px-4 mx-auto border-3 py-10 lg:flex lg:gap-10 lg:px-24"
      id="contact" data-aos = "fade-up"
    >
      <div className="lg:w-1/2 w-full">
        <div className="w-full">
          <p className="text-2xl font-bold">Find out more about us</p>
          <p className="text-base font-bold">
            Book a free consuktation or ask a question
          </p>

          <div className="bg-black h-[1px] w-10  mt-10"></div>
          {/* h-[2px] w-20 bg-black rounded-xl */}
        </div>

        <ul className="mt-10 w-full ">
          {contactDetails.map((contactDetail, index) => (
            <li className="pb-8" key={index}>
              <a href={contactDetail.contactLink} className="flex gap-2">
                <p className="text-logoBlue">{contactDetail.icon}</p>
                <p>{contactDetail.detail}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Form />
    </section>
  );
};

export default Contact;
