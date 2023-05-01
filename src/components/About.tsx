import HtmlIcon from "../assets/tech/html5.png";
import CssIcon from "../assets/tech/css3.png";
import SassIcon from "../assets/tech/sass.png";
import JavaScriptIcon from "../assets/tech/javascript.png";
import ReactIcon from "../assets/tech/reactjs.png";
import TypeScriptIcon from "../assets/tech/typescript.png";
import TailwindIcon from "../assets/tech/tailwind.png";
import GitIcon from "../assets/tech/git.png";
import { Heading } from "./Heading";

export default function About() {
  const section = {
    heading: "Overview",
    subheading: "Introduction",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi fugit sun i fugit sunt nostrum placeat, officia dolores earum, quia modi assumenda suscipit quod totam eaque consectetur, provident cumque explicabo a iusto Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi fugit sunt n. nostrum placeat, officia dolores earum, quia modi assumenda suscipit quod totam eaque consectetur, provident cumque.",
  };

  const techStack = [
    {
      title: "HTML5",
      icon: HtmlIcon,
    },
    {
      title: "CSS3",
      icon: CssIcon,
    },
    {
      title: "SASS",
      icon: SassIcon,
    },
    {
      title: "Tailwind CSS",
      icon: TailwindIcon,
    },
    {
      title: "JavaScript",
      icon: JavaScriptIcon,
    },
    {
      title: "React",
      icon: ReactIcon,
    },
    {
      title: "TypeScript",
      icon: TypeScriptIcon,
    },
    {
      title: "Git",
      icon: GitIcon,
    },
  ];

  return (
    <section id="about" className="container mb-20 py-10">
      <Heading
        heading={section.heading}
        subheading={section.subheading}
        body={section.body}
        aboutHeading={true}
      />

      {techStack.length > 0 && (
        <div className="clear-left mt-10 flex flex-wrap gap-x-10 gap-y-5">
          {techStack.map((tech) => (
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
