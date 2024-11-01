import HtmlIcon from "../assets/tech/html5.webp";
import CssIcon from "../assets/tech/css3.webp";
import SassIcon from "../assets/tech/sass.webp";
import JavaScriptIcon from "../assets/tech/javascript.webp";
import ReactIcon from "../assets/tech/reactjs.webp";
import VueIcon from "../assets/tech/vue.webp";
import TypeScriptIcon from "../assets/tech/typescript.webp";
import TailwindIcon from "../assets/tech/tailwind.webp";
import GitIcon from "../assets/tech/git.webp";

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
    title: "DestinationCore Component Library",
    description:
      "Library of standalone VueJS components common across DestinationCore's portfolio of websites.",
    liveUrl: "",
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
    title: "Porsche",
    description:
      "A data-driven marketing service from Porsche that provides Porsche dealers with market-leading website solutions to capture more traffic and convert qualified shoppers.",
    liveUrl: "https://www.porsche.com",
    githubUrl: "",
    tags: ["vue", "typescript", "astro", "sitecore"],
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
    title: "MetroCentre Redesign",
    description:
      "DestinationCore Pro website redesigned and built for Metrocentre Shopping Centre.",
    liveUrl: "https://themetrocentre.co.uk",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
  },
  {
    title: "Visit Bury St Edmunds",
    description:
      "DestinationCore Pro website built for Bury St Edmunds & Beyond.",
    liveUrl: "https://www.visit-burystedmunds.co.uk",
    githubUrl: "",
    tags: ["tailwind", "vue", "craftcms"],
  },
  {
    title: "Chatroom",
    description:
      "A full-stack chat app where users can create an account and send messages to a public chatroom which all users can see and respond to.",
    liveUrl: "https://practical-engelbart-e97075.netlify.app",
    githubUrl: "https://github.com/LukasV3/chatroom-app",
    tags: ["tailwind", "react", "reactrouter", "typescript", "firebase"],
  },
];
