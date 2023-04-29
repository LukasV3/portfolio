import { Heading } from "./Heading";

export default function Experience() {
  const section = {
    heading: "Work Experience",
    subheading: "What I have done so far",
  };

  const experiences = [
    {
      title: "Lead Frontend Developer",
      company: "DestinationCore",
      date: "Lorem 2022 - Ipsum 2023",
      bulletPoints: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quaerat? Facere officia ipsum debitis voluptates fugiat consequatur, qui quis esse.",
        "Sequi fugit provident vitae rerum. Dolorem mollitia saepe culpa rerum.",
      ],
    },
    {
      title: "Mobile App Developer",
      company: "1hourlife",
      date: "Lorem 2022 - Ipsum 2023",
      bulletPoints: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quaerat? Facere officia ipsum debitis voluptates fugiat consequatur, qui quis esse.",
        "Sequi fugit provident vitae rerum. Dolorem mollitia saepe culpa rerum.",
      ],
    },
  ];

  return (
    <section id="experience" className="container my-20 py-10">
      <Heading heading={section.heading} subheading={section.subheading} center={true} />

      {experiences.length > 0 && (
        <div className="flex flex-col items-center gap-y-8 text-white mt-20">
          {experiences.map((job) => (
            <div className="px-5 py-4 bg-[#1d1836] rounded-md border-b-2 border-white w-full md:w-[450px]">
              <h3 className="text-2xl font-bold">{job.title}</h3>

              <p className="text-zinc-500 text-sm font-semibold">{job.company}</p>

              <ul className="list-disc ml-5 mt-5 space-y-2">
                {job.bulletPoints.map((point) => (
                  <li className="text-base pl-1 tracking-wider">{point}</li>
                ))}
              </ul>

              <p className="text-zinc-500 text-sm font-semibold mt-3">{job.date}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
