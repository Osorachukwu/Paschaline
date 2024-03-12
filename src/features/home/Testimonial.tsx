import React from "react";
import styles from "./testimonial.module.css";

const Testimonial = () => {
  return (
    <section>
      <div className={styles.mobilecontainer}>
        <div className={styles.titlee}>
          <p>
            We've Helped <br /> Thousands Of Graduates <br /> Start Rewarding
            Writing Careers.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <div className={styles.content}>
            <div className={styles.contentOne}>
              <p style={{ fontWeight: "bold" }}>30M</p>
              <p>Demand for tech professionals in writing by 2030</p>
            </div>

            <div className={styles.contentTwo}>
              <p style={{ fontWeight: "bold" }}>85%</p>
              <p>Job offer letters through our CV's</p>
            </div>

            <div className={styles.contentThree}>
              <p style={{ fontWeight: "bolder" }}>93%</p>
              <p>Grant -Winning proposals</p>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Desktop 👇 */}

      <div className="hidden sm:block border-2 border-black mx-[5%] mt-0 md:mx-[15%]">
        <div className="grid grid-cols-4 gap-1 md:gap-4">
          <div className="p-2 bg-red-600">
            <p>
              We've Helped <br /> Thousands Of <br /> Graduates <br /> Start
              Rewarding Writing Careers.
            </p>
          </div>

          <div className="p-2 bg-red-600 grid-rows-[]">
            <p>
              <span className="text-xl">30M</span> <br /> Demand for tech <br /> professionals in
              <br />
              writing by 2030
            </p>
          </div>

          <div className="p-2 bg-red-600 grid-rows-[]">
            <p>
              <span className="text-xl">93%</span> <br /> Job offer letters <br /> through our CV's
            </p>
          </div>

          <div className="p-2 bg-red-600 grid-rows-[]">
            <p>
              <span className="text-xl">90%</span> <br /> Grant -Winning <br /> proposals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
