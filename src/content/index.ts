import HtmlIcon from "../assets/tech/html5.webp";
import CssIcon from "../assets/tech/css3.webp";
import SassIcon from "../assets/tech/sass.webp";
import JavaScriptIcon from "../assets/tech/javascript.webp";
import ReactIcon from "../assets/tech/reactjs.webp";
import VueIcon from "../assets/tech/vue.webp";
import TypeScriptIcon from "../assets/tech/typescript.webp";
import TailwindIcon from "../assets/tech/tailwind.webp";
import GitIcon from "../assets/tech/git.webp";

import PorscheLogo from "../assets/project/porsche-emblem.png";

export const navigation = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const aboutSection = {
  heading: "Overview",
  subheading: "Introduction",
  body: "Hi there! My name is Lukas Volk, and I'm a self-taught frontend developer based in Barcelona, Spain. I'm currently working as the Lead Frontend Developer at DestinationCore where I play a crucial role in developing and successfully delivering the company's highest profile websites. I'm passionate about delivering high-quality, innovative solutions that exceed client expectations, and I am always looking for new challenges to push my skills further!",
};

export const projectsSection = {
  heading: "Projects",
  subheading: "My Work",
  body: "Some of the projects are from work and some are things I have created in my own time.",
};

export const technologies = [
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
    title: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Vue",
    icon: VueIcon,
  },
  {
    title: "Git",
    icon: GitIcon,
  },
];

export const projects = [
  {
    title: "Porsche",
    description:
      "A data-driven marketing service from Porsche that provides Porsche dealers with market-leading website solutions to capture more traffic and convert qualified shoppers.",
    liveUrl: "https://www.porsche.com",
    githubUrl: "",
    tags: ["vue", "typescript", "astro", "sitecore"],
    logo: PorscheLogo,
  },
  {
    title: "Pluto Digital",
    description:
      "Founded a web design and development agency creating bespoke websites for small to medium-sized businesses.",
    liveUrl: "https://pluto-digital.webflow.io",
    githubUrl: "",
    tags: ["figma", "webflow"],
    logo: "",
  },
  {
    title: "DestinationCore Component Library",
    description:
      "Library of standalone VueJS components common across DestinationCore's portfolio of websites.",
    liveUrl: "https://destinationcore.com",
    githubUrl: "",
    tags: ["vue", "npm"],
    logo: "",
  },
  {
    title: "Visit Lichfield",
    description: "DestinationCore Pro website built for Visit Lichfield.",
    liveUrl: "https://www.visitlichfield.co.uk",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
    logo: "",
  },
  {
    title: "Visit Worcestershire Trade",
    description:
      "DestinationCore Pro website built for Visit Worcestershire DMO.",
    liveUrl: "https://www.visitworcestershire.org",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
    logo: "",
  },
  {
    title: "Portfolio",
    description: "The website you're looking at!",
    liveUrl: "https://lukasvolk.dev",
    githubUrl: "https://github.com/LukasV3/portfolio",
    tags: ["tailwind", "react", "typescript"],
    logo: "",
  },
  {
    title: "MetroCentre Shopping Centre",
    description:
      "DestinationCore Pro website redesigned and built for Metrocentre Shopping Centre.",
    liveUrl: "https://themetrocentre.co.uk",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
    logo: "",
  },
  {
    title: "Lakeside Shopping Centre",
    description:
      "DestinationCore Pro website redesigned and built for Lakeside Shopping Centre.",
    liveUrl: "https://lakeside-shopping.com",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
    logo: "",
  },
  {
    title: "Visit Peak District & Derbyshire",
    description:
      "DestinationCore Enterprise website built for Visit Peak District & Derbyshire.",
    liveUrl: "https://visitpeakdistrict.com",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
    logo: "",
  },
];
