import HtmlIcon from "../assets/tech/html5.png";
import CssIcon from "../assets/tech/css3.png";
import SassIcon from "../assets/tech/sass.png";
import JavaScriptIcon from "../assets/tech/javascript.png";
import ReactIcon from "../assets/tech/reactjs.png";
import VueIcon from "../assets/tech/vue.png";
import TypeScriptIcon from "../assets/tech/typescript.png";
import TailwindIcon from "../assets/tech/tailwind.png";
import GitIcon from "../assets/tech/git.png";

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
    tags: [
      {
        name: "vue",
        color: "text-green-500",
      },
      {
        name: "npm",
        color: "text-red-500",
      },
    ],
  },
  {
    title: "Visit Lichfield",
    description: "DestinationCore Pro website built for Visit Lichfield.",
    liveUrl: "https://www.visitlichfield.co.uk",
    githubUrl: "",
    tags: [
      {
        name: "tailwind",
        color: "text-sky-500",
      },
      {
        name: "vue",
        color: "text-green-500",
      },
      {
        name: "craftcms",
        color: "text-orange-500",
      },
    ],
  },
  {
    title: "Notable",
    description: "A note-taking app where users can easily create, edit, and organize their notes using customized tags for quick and efficient search and filtering.",
    liveUrl: "https://notable-lv3.netlify.app",
    githubUrl: "https://github.com/LukasV3/notable",
    tags: [
      {
        name: "tailwind",
        color: "text-sky-500",
      },
      {
        name: "react",
        color: "text-cyan-500",
      },
      {
        name: "reactrouter",
        color: "text-indigo-500",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "Visit Worcestershire Trade",
    description: "DestinationCore Pro website built for Visit Worcestershire DMO.",
    liveUrl: "https://www.visitworcestershire.org",
    githubUrl: "",
    tags: [
      {
        name: "tailwind",
        color: "text-sky-500",
      },
      {
        name: "vue",
        color: "text-green-500",
      },
      {
        name: "craftcms",
        color: "text-orange-500",
      },
    ],
  },
  {
    title: "Portfolio",
    description: "The website you're looking at!",
    liveUrl: "",
    githubUrl: "https://github.com/LukasV3/portfolio",
    tags: [
      {
        name: "tailwind",
        color: "text-sky-500",
      },
      {
        name: "react",
        color: "text-cyan-500",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "MetroCentre Redesign",
    description: "DestinationCore Pro website redesigned and built for Metrocentre Shopping Centre.",
    liveUrl: "https://themetrocentre.co.uk",
    githubUrl: "",
    tags: [
      {
        name: "tailwind",
        color: "text-sky-500",
      },
      {
        name: "vue",
        color: "text-green-500",
      },
      {
        name: "craftcms",
        color: "text-orange-500",
      },
    ],
  },
  {
    title: "Visit Bury St Edmunds",
    description: "DestinationCore Pro website built for Bury St Edmunds & Beyond.",
    liveUrl: "https://www.visit-burystedmunds.co.uk",
    githubUrl: "",
    tags: [
      {
        name: "tailwind",
        color: "text-sky-500",
      },
      {
        name: "vue",
        color: "text-green-500",
      },
      {
        name: "craftcms",
        color: "text-orange-500",
      },
    ],
  },
  {
    title: "Chatroom",
    description: "A full-stack chat app where users can create an account and send messages to a public chatroom which all users can see and respond to.",
    liveUrl: "https://practical-engelbart-e97075.netlify.app",
    githubUrl: "https://github.com/LukasV3/chatroom-app",
    tags: [
      {
        name: "tailwind",
        color: "text-sky-500",
      },
      {
        name: "react",
        color: "text-cyan-500",
      },
      {
        name: "reactrouter",
        color: "text-indigo-500",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
    ],
  },
];
