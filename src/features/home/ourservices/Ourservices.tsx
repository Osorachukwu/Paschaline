import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Ourservices: React.FC = () => {
  const services: Service[] = [
    {
      icon: "🧑",
      title: "CV Writing:",
      description:
        "Stand out from the crowd with a professionally crafted curriculum vitae that highlights your achievements and qualifications.",
    },
    {
      icon: "🧑",
      title: "Proposals:",
      description:
        "Whether you're pitching a project, seeking funding, or submitting a business proposal, we'll ensure your document is clear, concise, winning and impactful.",
    },
    // {
    //   icon: "🧑",
    //   title: "Website content",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // },
    // {
    //   icon: "🧑",
    //   title: "Blog writing",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // }
    // {
    //   icon: "🧑",
    //   title: "Article writing",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // },
    // {
    //   icon: "🧑",
    //   title: "Product description",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.",
    // },
  ];

  return (
    <section className="container px-4 mx-auto lg:px-40 xl:px-72">
      <div className="py-2 text-xl">
        <div>
          <p className="font-bold text-center mb-6 underline">Our Services</p>
          <p className="text-4xl text-center mb-6">Our business expert writting services</p>
        </div>

        <div className="sm:grid sm:grid-cols-2 gap-2 xl:gap-8 ">
          {services.map((service) => (
            <div className="flex flex-col gap-1 p-5 mb-2 rounded-md border-[1px] border-black">
              <p>{service.icon}</p>
              <p className="text-lg font-bold">{service.title}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
