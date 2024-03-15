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
      title: " Letters of Intent (LOIs):",
      description:
        "Make a strong impression with a well-written letter of intent that conveys your intentions and objectives effectively.",
    },
    
    {
      title: " Memos:",
      description:
        " Streamline communication within your organization with polished and professional memos that convey information clearly and concisely.",
    },
    {
      title: "Pitch Decks:",
      description:
        "Captivate investors and stakeholders with visually appealing and persuasive pitch decks that showcase the potential of your venture or project.",
    },
    {
      title: "Grant Proposals:",
      description:
        " Maximize your chances of securing funding with meticulously researched and expertly written grant proposals that address the needs of funders and align with your organization's mission.",
    }
  ];
 


  return (
    <section className="container px-4 mx-auto py-8 relative ">
      <div className="h-full flex flex-col items-center md:items-start border-2 border-logoBlue">
        <div className="h-full sm:max-w-[60%] flex flex-col justify-center gap-4 lg:gap-1 mb-3 py-5 xl:pl-52">
          {statementDetais.map((statement, index) => (
            <div className="h-full lg:max-w-[30rem] " key={index}>
              <p className="text-xl font-semibold text-logoBlue">{statement.title}</p>
              <p>{statement.description}</p>
            </div>
          ))}
        </div>


        <div className=" md:w-72 lg:w-[30rem] md:absolute md:right-5 xl:right-72 lg:-top-4">
          <Image src={teamPhoto} alt="Team photo" />
        </div>
      </div>
    </section>
  );
};

export default Statements;
