import React from "react";
import Image from "next/image";
import teamPhoto1 from "@/assets/teamPhoto-2.jpg";
import styles from "./whyus.module.css"

const WhyUs = () => {
  return (
    <div style={{ padding: "80px 16px", backgroundColor: "grey" }} className={styles.whyus}>
      <div>
        <div className={styles.sect1}>
        {/* className="md:w-20 md:bg-black" */}
          <p
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            Why Choose Paschaline's Consult?
          </p>

          <p style={{ lineHeight: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Expertise</span>: Our team
            consists of experienced writers and consultants with a proven track
            record of success in both educational and business contexts. <br />
            </p>

            <p>
            <span style={{ fontWeight: "bold" }}>Customization:</span> We
            understand that every client is unique, which is why we take the
            time to understand your goals and tailor our services to meet your
            specific requirements. <br />
            </p>
            <p>
            <span style={{ fontWeight: "bold" }}>Quality Assurance:</span> Our
            commitment to excellence means that every document we produce
            undergoes rigorous quality assurance processes to ensure accuracy,
            clarity, and effectiveness.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "pink",
        }}
      >
        <Image src={teamPhoto1} alt="" />
      </div>
    </div>
  );
};

export default WhyUs;
