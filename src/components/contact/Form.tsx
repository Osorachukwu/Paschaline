import React from "react";
import styles from "./form.module.css";

const Form = () => {
  return (
    <form className={styles.container}>
      <div>
        <div>
          <input type="text" placeholder="First Name" className={styles.inputField}/>
          <input type="text" placeholder="Email Address" className={styles.inputField}/>
        </div>

        <div>
          <input type="text" placeholder="Last Name"className={styles.inputField}/>
          <input type="text" placeholder="Phone Number"className={styles.inputField}/>
        </div>
      </div>

      <textarea
        name=""
        id=""
        cols="5"
        rows="2"
        placeholder="Message"
      ></textarea>

      <button className="btn rounded-md bg-black text-white w-full mt-10">
        Send Message
      </button>
    </form>
  );
};

export default Form;
