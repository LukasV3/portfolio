import { Heading } from "./Heading";
import { aboutSection, technologies } from "../content";

export default function About() {
  return (
    <section id="about" className="container mb-20 py-10">
      <Heading
        heading={aboutSection.heading}
        subheading={aboutSection.subheading}
        body={aboutSection.body}
        aboutHeading={true}
      />

      {technologies.length > 0 && (
        <div className="clear-left mt-20 flex flex-wrap justify-center gap-x-10 gap-y-5 lg:justify-start">
          {technologies.map((tech) => (
            <img
              key={tech.title}
              src={tech.icon}
              alt={tech.title}
              className="w-10 h-10"
              width="40"
              height="40"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </section>
  );
}
