"use client"
import React, { useState } from "react";
import styles from "./form.module.css";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mwkgnyye");
  if (state.succeeded) {
    return <p className="text-logoBlue text-xl font-semibold">Thanks for reaching out! We&apos;ll get back to you shortly.</p>;
  }

  return (
    <form
      className="lg:w-1/2 w-full"
      data-aos="fade-up"
      target="_blank"
      onSubmit={handleSubmit}
    >
      <div className="sm:flex sm:justify-center sm:gap-2 flex-col">
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            maxLength={30}
            // value={formData.firstName}
            // onChange={handleChange}
            className="pl-2 outline-none border-b-2 h-20 max-w-xs w-1/2"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            maxLength={50}
            // value={formData.email}
            // onChange={handleChange}
            className="pl-2 outline-none border-b-2 h-20 w-1/2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            maxLength={30}
            // value={formData.lastName}
            // onChange={handleChange}
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone_number"
            maxLength={15}
            // value={formData.phoneNumber}
            // onChange={handleChange}
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
        </div>

        <div className="w-full">
          <textarea
            id=""
            cols={5}
            rows={2}
            placeholder="Message"
            name="message"
            maxLength={1000}
            // value={formData.message}
            // onChange={handleChange}
            className="mx-auto w-full pl-2 border-b-2 outline-none sm:mt-2"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn rounded-md bg-logoBlue hover:text-black text-white w-full sm:mt-10 sm:h-16 sm:text-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;

// <form action="https://formspree.io/f/xyyrdbne" method="POST" className="lg:w-1/2 w-full" data-aos = "fade-up" target="_blank">
// <div className="sm:flex sm:justify-center sm:gap-2 flex-col">

//   <div className="flex gap-2 w-full">
//     <input
//       type="text"
//       placeholder="First Name"
//       name="first_name"
//       maxLength={30}
//       // value={formData.firstName}
//       // onChange={handleChange}
//       className="pl-2 outline-none border-b-2 h-20 w-1/2"
//     />
//     <input
//       type="email"
//       placeholder="Email Address"
//       name="email"
//       maxLength={50}
//       // value={formData.email}
//       // onChange={handleChange}
//       className="pl-2 outline-none border-b-2 h-20 w-1/2"
//     />
//   </div>

//   <div className="flex gap-2 w-full">
//     <input
//       type="text"
//       placeholder="Last Name"
//       name="last_name"
//       maxLength={30}
//       // value={formData.lastName}
//       // onChange={handleChange}
//       className="pl-2 outline-none border-b-2 h-20 w-full"
//     />
//     <input
//       type="tel"
//       placeholder="Phone Number"
//       name="phone_number"
//       maxLength={15}
//       // value={formData.phoneNumber}
//       // onChange={handleChange}
//       className="pl-2 outline-none border-b-2 h-20 w-full"
//     />
//   </div>

//   <div className="w-full">
//     <textarea
//       id=""
//       cols={5}
//       rows={2}
//       placeholder="Message"
//       name="message"
//       maxLength={1000}
//       // value={formData.message}
//       // onChange={handleChange}
//       className="mx-auto w-full pl-2 border-b border-black outline-none sm:mt-2"
//     ></textarea>
//   </div>
// </div>

// <button type="submit" className="btn rounded-md bg-logoBlue hover:text-black text-white w-full sm:mt-10 sm:h-16 sm:text-lg">
//   Send Message
// </button>
// </form>
