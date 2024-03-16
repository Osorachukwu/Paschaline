import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phoneNumber, message } = formData;
    const mailtoLink = mailto:christinotochukwu@gmail.com?subject=Contact Form Submission&body=First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0AEmail: ${email}%0D%0APhone Number: ${phoneNumber}%0D%0AMessage: ${message};

    window.open(mailtoLink);
  };

  return (
    <form className="lg:w-1/2 w-full">
      <div className="sm:flex sm:justify-center sm:gap-2 flex-col">
       
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange}
            className="pl-2 outline-none border-b-2 h-20 w-1/2"
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            className="pl-2 outline-none border-b-2 h-20 w-1/2"
          />
        </div>

        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange}
            className="pl-2 outline-none border-b-2 h-20 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange}
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
            name="message" 
            value={formData.message} 
            onChange={handleChange}
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
