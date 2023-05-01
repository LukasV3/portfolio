import { Heading } from "./Heading";
import LinkIcon from "../assets/icons/link.svg";
import GitHubIcon from "../assets/icons/github.svg";

type ProjectCardProps = {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  projectTechStack: string[];
};

const techStack = [
  {
    title: "React",
    colorClass: "text-red-500",
  },
  {
    title: "TypeScript",
    colorClass: "text-green-500",
  },
  {
    title: "Tailwind",
    colorClass: "text-blue-500",
  },
  {
    title: "Git",
    colorClass: "text-orange-500",
  },
];

const projects = [
  {
    title: "DestinationCore Component Library",
    description:
      "Library of standalone VueJS components common across DestinationCore's portfolio of websites.",
    liveUrl: "",
    githubUrl: "",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
  {
    title: "Visit Lichfield",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deleniti quasi, odit placeat officia dolor sunt quibusdam quaerat distinctio!",
    liveUrl: "https://www.visitlichfield.co.uk",
    githubUrl: "",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
  {
    title: "Notable",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deleniti quasi, odit placeat officia dolor sunt quibusdam quaerat distinctio! Nihil animi veniam molestias saepe, iure consequatur quisquam ex facere aperiam.",
    liveUrl: "https://notable-lv3.netlify.app",
    githubUrl: "https://github.com/LukasV3/notable",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
  {
    title: "Visit Worcestershire Trade",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deleniti quasi, odit placeat officia dolor sunt quibusdam quaerat distinctio!",
    liveUrl: "https://www.visitworcestershire.org",
    githubUrl: "",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
  {
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deleniti quasi, odit placeat officia dolor sunt quibusdam quaerat distinctio!",
    liveUrl: "https://lukas.dev",
    githubUrl: "https://github.com/LukasV3/portfolio",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
  {
    title: "MetroCentre Redesign",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deleniti quasi, odit placeat officia dolor sunt quibusdam quaerat distinctio!",
    liveUrl: "https://themetrocentre.co.uk",
    githubUrl: "",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
  {
    title: "Visit Bury St Edmunds",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deleniti quasi, odit placeat officia dolor sunt quibusdam quaerat distinctio!",
    liveUrl: "https://www.visit-burystedmunds.co.uk",
    githubUrl: "",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
  {
    title: "Chatroom",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deleniti quasi, odit placeat officia dolor sunt quibusdam quaerat distinctio!",
    liveUrl: "https://practical-engelbart-e97075.netlify.app",
    githubUrl: "https://github.com/LukasV3/chatroom-app",
    projectTechStack: ["react", "typescript", "tailwind"],
  },
];

export default function Projects() {
  const section = {
    heading: "Projects",
    subheading: "My Work",
    body: "Some of the projects are from work and some are things I created in my own time.",
  };

  return (
    <section id="projects" className="container my-20 py-10">
      <Heading
        heading={section.heading}
        subheading={section.subheading}
        body={section.body}
      />

      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 3 === 0)
            .map((project) => (
              <ProjectCard {...project} />
            ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 3 === 1)
            .map((project) => (
              <ProjectCard {...project} />
            ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <ProjectCard {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  liveUrl,
  githubUrl,
  projectTechStack,
}: ProjectCardProps) {
  return (
    <div className="green-pink-gradient p-px rounded-2xl group">
      <div className="bg-[#151030] h-full rounded-2xl p-5">
        <h3 className="text-white text-2xl font-bold">{title}</h3>

        <p className="text-zinc-500 text-sm mt-1">{description}</p>

        {projectTechStack.length > 0 && (
          <ul className="flex gap-2 text-sm mt-2">
            {projectTechStack.map((projectTech) => {
              const techItem = techStack.find(
                (tech) => tech.title.toLowerCase() === projectTech.toLowerCase()
              );

              return <li className={techItem?.colorClass}>#{projectTech}</li>;
            })}
          </ul>
        )}

        {(liveUrl || githubUrl) && (
          <div className="mt-4 text-sm flex flex-col gap-1">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 duration-300"
              >
                <img src={LinkIcon} className="w-4 h-4 mt-0.5" />

                <p>{liveUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}</p>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 duration-300"
              >
                <img src={GitHubIcon} className="w-4 h-4 mt-0.5" />

                <p>{githubUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}</p>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
