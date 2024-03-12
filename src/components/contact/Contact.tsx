import React from "react";
import Form from "./Form";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import styles from "./contact.module.css";

const Contact = () => {
  const contactDetails = [
    {
      icon: <Phone />,
      detail: "+(234) 81-3551-0975 ",
    },
    {
      icon: <Phone />,
      detail: "+(234) 80-2800-5847 ",
    },
    {
      icon: <Mail />,
      detail: "paschalinescreativesandconsult@gmail.com",
    },
    {
      icon: <MapPin />,
      detail: "example@email.com",
    }
   
  ];

  return (
    <div className="container px-4 mx-auto border-3 py-10 lg:flex lg:justify-between lg:gap-10 lg:px-24">
      <div>
        <div className="w-full">
          <p className="text-2xl font-bold">Find out more about us</p>
          <p className="text-base font-bold">
            Book a free consuktation or ask a question
          </p>

          <div className="h-[2px] w-20 bg-black mt-10 rounded-xl"></div>
        </div>

        <div className="mt-10 w-full">
          {contactDetails.map((contactDetail) => (
            <div className="flex flex-wrap gap-1 pb-8">
              <p>{contactDetail.icon}</p>
              <p>{contactDetail.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <Form />
    </div>
  );
};

export default Contact;
