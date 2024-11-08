import HtmlIcon from "../assets/tech/html5.webp";
import CssIcon from "../assets/tech/css3.webp";
import SassIcon from "../assets/tech/sass.webp";
import JavaScriptIcon from "../assets/tech/javascript.webp";
import ReactIcon from "../assets/tech/reactjs.webp";
import VueIcon from "../assets/tech/vue.webp";
import TypeScriptIcon from "../assets/tech/typescript.webp";
import TailwindIcon from "../assets/tech/tailwind.webp";
import GitIcon from "../assets/tech/git.webp";
import FigmaIcon from "../assets/tech/figma.webp";
import WebflowIcon from "../assets/tech/webflow.webp";
import AstroIcon from "../assets/tech/astro.webp";
import CraftCmsIcon from "../assets/tech/craftcms.webp";
import VitestIcon from "../assets/tech/vitest.webp";
import PlaywrightIcon from "../assets/tech/playwright.webp";

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
  body: `Hello! I’m Lukas Volk, a self-taught frontend developer based in Essex, UK. Over the years, I’ve had the privilege of working with some amazing brands — from renowned names like Porsche during my time in Barcelona to those closer to home, like Lakeside Shopping Centre and the like. 
  
  This year, I took an exciting step by founding Pluto Digital, my own design and development agency, which is where I’m now dedicating most of my time to. I’m always eager for new challenges, so if you’re interested in collaborating, don’t hesitate to reach out!`,
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
    title: "Figma",
    icon: FigmaIcon,
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
    title: "Astro",
    icon: AstroIcon,
  },
  {
    title: "Git",
    icon: GitIcon,
  },
  {
    title: "Vitest",
    icon: VitestIcon,
  },
  {
    title: "Playwright",
    icon: PlaywrightIcon,
  },
  {
    title: "Craft CMS",
    icon: CraftCmsIcon,
  },
  {
    title: "Webflow",
    icon: WebflowIcon,
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
  },
  {
    title: "Pluto Digital",
    description:
      "Founded a web design and development agency creating bespoke websites for small to medium-sized businesses.",
    liveUrl: "",
    githubUrl: "",
    tags: ["figma", "webflow"],
  },
  {
    title: "DestinationCore Component Library",
    description:
      "Library of standalone VueJS components common across DestinationCore's portfolio of websites.",
    liveUrl: "https://destinationcore.com",
    githubUrl: "",
    tags: ["vue", "npm"],
  },
  {
    title: "Visit Lichfield",
    description: "DestinationCore Pro website built for Visit Lichfield.",
    liveUrl: "https://www.visitlichfield.co.uk",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
  },
  {
    title: "Visit Worcestershire Trade",
    description:
      "DestinationCore Pro website built for Visit Worcestershire DMO.",
    liveUrl: "https://www.visitworcestershire.org",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
  },
  {
    title: "Portfolio",
    description: "The website you're looking at!",
    liveUrl: "https://lukasvolk.dev",
    githubUrl: "https://github.com/LukasV3/portfolio",
    tags: ["tailwind", "react", "typescript"],
  },
  {
    title: "Metrocentre Shopping Centre",
    description:
      "DestinationCore Pro website redesigned and built for Metrocentre Shopping Centre.",
    liveUrl: "https://themetrocentre.co.uk",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
  },
  {
    title: "Lakeside Shopping Centre",
    description:
      "DestinationCore Pro website redesigned and built for Lakeside Shopping Centre.",
    liveUrl: "https://lakeside-shopping.com",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
  },
  {
    title: "Visit Peak District & Derbyshire",
    description:
      "DestinationCore Enterprise website built for Visit Peak District & Derbyshire.",
    liveUrl: "https://visitpeakdistrict.com",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
  },
];
