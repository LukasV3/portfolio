import { Heading } from "./Heading";
import LinkIcon from "../assets/icons/link.svg";
import GitHubIcon from "../assets/icons/github.svg";
import { projectsSection, projects } from "../content";

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

type ProjectLinkProps = {
  icon: {
    src: string;
    alt: string;
  };
  url: string;
};

export default function Projects() {
  return (
    <section id="projects" className="container my-20 py-10">
      <Heading
        heading={projectsSection.heading}
        subheading={projectsSection.subheading}
        body={projectsSection.body}
      />

      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 3 === 0)
            .map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 3 === 1)
            .map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, liveUrl, githubUrl, tags }: ProjectCardProps) {
  return (
    <div className="green-purple-gradient p-px rounded-2xl group">
      <div className="bg-primary-dark h-full rounded-2xl p-5">
        <h3 className="text-white text-2xl font-bold">{title}</h3>

        <p className="text-zinc-500 text-sm mt-1">{description}</p>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-2 text-sm mt-2">
            {tags.map((tag) => {
              return (
                <li key={tag.name} className={tag.color}>
                  #{tag.name}
                </li>
              );
            })}
          </ul>
        )}

        {(liveUrl || githubUrl) && (
          <div className="mt-4 text-sm flex flex-col gap-1">
            {liveUrl && (
              <ProjectLink icon={{ src: LinkIcon, alt: "External link" }} url={liveUrl} />
            )}

            {githubUrl && (
              <ProjectLink
                icon={{ src: GitHubIcon, alt: "GitHub logo" }}
                url={githubUrl}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectLink({ icon, url }: ProjectLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center gap-2 opacity-70 hover:opacity-100 duration-300"
    >
      <img
        src={icon.src}
        alt={icon.alt}
        className="w-4 h-4 mt-0.5"
        width="16"
        height="16"
      />

      <p>{url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}</p>
    </a>
  );
}
