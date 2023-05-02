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
        <div className="clear-left mt-10 flex flex-wrap gap-x-10 gap-y-5">
          {technologies.map((tech) => (
            <img
              src={tech.icon}
              title={tech.title}
              alt={tech.title}
              className="w-10 h-10"
            />
          ))}
        </div>
      )}
    </section>
  );
}
