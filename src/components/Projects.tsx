import { Heading } from "./Heading";
import LinkIcon from "../assets/icons/link.svg";
import GitHubIcon from "../assets/icons/github.svg";
import { projectsSection, projects } from "../content";

type ProjectCardProps = {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
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

function ProjectCard({
  title,
  description,
  liveUrl,
  githubUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div className="green-purple-gradient p-px rounded-2xl group">
      <div className="bg-primary-dark h-full rounded-2xl p-5">
        <h3 className="text-white text-2xl font-bold">{title}</h3>

        <p className="text-zinc-500 text-sm mt-3">{description}</p>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-2 text-sm mt-2">
            {tags.map((tag) => {
              return (
                <li key={tag} className={getTagClass(tag)}>
                  #{tag}
                </li>
              );
            })}
          </ul>
        )}

        {(liveUrl || githubUrl) && (
          <div className="mt-4 text-sm flex flex-col gap-1 w-fit">
            {liveUrl && (
              <ProjectLink
                icon={{ src: LinkIcon, alt: "External link" }}
                url={liveUrl}
              />
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
      className="flex items-center gap-2 opacity-70 break-all hover:opacity-100 duration-300"
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

function getTagClass(tagName: string): string {
  const tagsColorArr = [
    {
      name: "npm",
      color: "text-red-500",
    },
    {
      name: "tailwind",
      color: "text-sky-500",
    },
    {
      name: "vue",
      color: "text-green-500",
    },
    {
      name: "react",
      color: "text-cyan-500",
    },
    {
      name: "typescript",
      color: "text-blue-500",
    },
    {
      name: "astro",
      color: "text-purple-500",
    },
    {
      name: "sitecore",
      color: "text-rose-600",
    },
    {
      name: "craftcms",
      color: "text-orange-500",
    },
    {
      name: "firebase",
      color: "text-yellow-500",
    },
    {
      name: "figma",
      color: "text-red-400",
    },
    {
      name: "webflow",
      color: "text-indigo-500",
    },
  ];
  const tagObj = tagsColorArr.find((tag) => tag.name === tagName);

  return tagObj ? tagObj.color : "text-white";
}
