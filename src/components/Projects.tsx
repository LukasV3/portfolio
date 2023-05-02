import { Heading } from "./Heading";
import LinkIcon from "../assets/icons/link.svg";
import GitHubIcon from "../assets/icons/github.svg";
import { projects } from "../content";

type ProjectCardProps = {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tags: {
    name: string;
    color: string;
  }[];
};

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
  tags,
}: ProjectCardProps) {
  return (
    <div className="green-pink-gradient p-px rounded-2xl group">
      <div className="bg-[#151030] h-full rounded-2xl p-5">
        <h3 className="text-white text-2xl font-bold">{title}</h3>

        <p className="text-zinc-500 text-sm mt-1">{description}</p>

        {tags.length > 0 && (
          <ul className="flex gap-2 text-sm mt-2">
            {tags.map((tag) => {
              return <li className={tag.color}>#{tag.name}</li>;
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
