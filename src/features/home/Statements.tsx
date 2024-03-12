import React from "react";
import Image from "next/image";
import teamPhoto from "@/assets/teamPhoto-1.jpg";

const Statements = () => {
  const statementDetais = [
    {
      title: "Statement of Purpose (SOP):",
      description:
        "Let our experts help you articulate your academic and professional aspirations in a compelling and persuasive manner.",
    },
    {
      title: "Statement of Purpose (SOP):",
      description:
        "Let our experts help you articulate your academic and professional aspirations in a compelling and persuasive manner.",
    },
    {
      title: "Statement of Purpose (SOP):",
      description:
        "Let our experts help you articulate your academic and professional aspirations in a compelling and persuasive manner.",
    },
    {
      title: "Statement of Purpose (SOP):",
      description:
        "Let our experts help you articulate your academic and professional aspirations in a compelling and persuasive manner.",
    },
  ];

  return (
    <section className="container px-4 mx-auto h-[50vh]">
      <div className="flex justify-between">
        <div className="flex flex-cc">
          {statementDetais.map((statement) => (
            <div>
              <p>{statement.title}</p>
              <p>{statement.description}</p>
            </div>
          ))}
        </div>

        <div className="h-full w-40">
          <Image src={teamPhoto} alt="Team photo" />
        </div>
      </div>
    </section>
  );
};

export default Statements;
