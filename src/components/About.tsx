import ReactIcon from "../assets/tech/reactjs.png";
import TypeScriptIcon from "../assets/tech/typescript.png";
import TailwindIcon from "../assets/tech/tailwind.png";
import GitIcon from "../assets/tech/git.png";
import { Heading } from "./Heading";

type TechCardProps = {
  title: string;
  icon: string;
};

export default function About() {
  const techStack = [
    {
      title: "React",
      icon: ReactIcon,
    },
    {
      title: "TypeScript",
      icon: TypeScriptIcon,
    },
    {
      title: "Tailwind CSS",
      icon: TailwindIcon,
    },
    {
      title: "Git",
      icon: GitIcon,
    },
  ];

  return (
    <section id="about" className="container mb-20 py-10">
      <Heading heading="Overview" subheading="Introduction" />

      <p className="text-sm text-zinc-500 mt-4 max-w-3xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci non totam
        veniam officiis sint recusandae perspiciatis itaque, cupiditate voluptatem sed
        illum, explicabo impedit. Consectetur, nulla. Soluta rem inventore esse
        perspiciatis.
      </p>

      {techStack.length > 0 && (
        <div className="mt-20 flex flex-wrap gap-10">
          {techStack.map((tech) => (
            <TechCard key={tech.title} title={tech.title} icon={tech.icon} />
          ))}
        </div>
      )}
    </section>
  );
}

function TechCard({ title, icon }: TechCardProps) {
  return (
    <div className="w-full sm:w-[250px]">
      <div className="w-full green-pink-gradient p-px rounded-2xl">
        <div className="bg-[#151030] rounded-2xl py-5 px-12 min-h-[260px] flex flex-col gap-y-6 justify-center items-center">
          <img src={icon} alt={title} className="w-20 h-20 object-fit" />

          <h3 className="text-white text-xl font-bold text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
}
