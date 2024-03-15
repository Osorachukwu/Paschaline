import React from "react";
import styles from "./form.module.css";

const Form = () => {
  return (
    <form className="lg:w-1/2 w-full">
      <div className="sm:flex sm:justify-center sm:gap-2 flex-col">
        {/* <div>
          <input
            type="text"
            placeholder="First Name"
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
        </div>
        <div className="">
          <textarea
            name=""
            id=""
            cols={5}
            rows={2}
            placeholder="Message"
            className="mx-auto w-full border-b border-black outline-none sm:mt-2"
          ></textarea>
        </div> */}
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="First Name"
            className="pl-2 outline-none border-b-2 h-20 w-1/2"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="pl-2 outline-none border-b-2 h-20 w-1/2"
          />
        </div>
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Last Name"
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
        </div>
        <div className="w-full">
          <textarea
            name=""
            id=""
            cols={5}
            rows={2}
            placeholder="Message"
            className="mx-auto w-full pl-2 border-b border-black outline-none sm:mt-2"
          ></textarea>
        </div>
      </div>

      <button className="btn rounded-md bg-black text-white w-full sm:mt-10 sm:h-16 sm:text-lg">
        Send Message
      </button>
    </form>
  );
};

export default Form;
