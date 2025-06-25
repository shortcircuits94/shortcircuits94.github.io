import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export const projects = [
  {
    id: "tapestry",
    title: "Tapestry",
    description:
      "A collaborative storytelling platform where communities contribute multimedia content to build rich, evolving narratives.",
    images: [
      "/images/projects/tapestry/tapestry1.png",
      "/images/projects/tapestry/tapestry2.png",
      "/images/projects/tapestry/tapestry3.png",
    ],
    github: [
      "https://github.com/andreaholstein/tapestry-client",
      "https://github.com/andreaholstein/tapestry-server",
    ],
    tech: [SiReact, SiJavascript, SiNodedotjs],
    caseStudy: [
      "Tapestry is a collaborative digital storytelling platform designed to empower communities to weave their voices into rich, multimedia narratives.",
      "Our vision was to create a shared space where users can contribute photos, audio, text, and video blocks, enabling the creation of dynamic, evolving stories.",
      "I contributed primarily to the back-end. I also implemented the front-end logic that allows people to post gifs, photos and videos.",
      "Key Features include:",
      "- Media uploads with cloud storage integration.",
      "- Contributor timelines to track story changes.",
      "- Tagging and version control for better content management.",
      "One major challenge was coordinating real-time updates while preserving block ownership and formatting. We solved this with optimistic UI updates backed by backend timestamp validation.",
      "Tapestry taught me valuable lessons in frontend data handling, collaborative UX design, and working under real-time constraints.",
    ],
  },
  {
    id: "savoury-solutions",
    title: "Savoury Solutions",
    description:
      "A recipe app that helps reduce food waste by generating meal ideas based on what users already have in their pantry.",
    images: [
      "/images/projects/savoury/Home-Desktop.png",
      "/images/projects/savoury/Favourites-Desktop.png",
      "/images/projects/savoury/RecipeDetails-Desktop.png",
    ],
    github: [
      "https://github.com/shortcircuits94/savoury-solutions",
      "https://github.com/shortcircuits94/savoury-solutions-backend",
    ],
    tech: [SiReact, SiJavascript, SiNodedotjs],
    caseStudy: [
      "Savoury Solutions is a full-stack app designed to help users reduce food waste by suggesting recipes based on the ingredients they already have.",
      "Developed during a startup weekend challenge, the platform targets families who want to plan meals efficiently using their pantry contents.",
      "My role focused on integrating the Node.js backend API with the React frontend and developing the core UI components for recipe suggestions and meal planning.",
      "Key features include:",
      "- A smart recipe suggestion engine that maximizes ingredient use.",
      "- A login with a favourites section that allows the user to save their recipes.",
      "This project taught me the importance of MVP thinking—prioritizing essential features and iterating quickly based on user feedback and mock data.",
    ],
  },
  {
    id: "scotiabank-hackathon",
    title: "Scotiabank Hackathon",
    description:
      "A financial advisor finder tool built during a hackathon to help newcomers connect with advisors based on their needs.",
    images: [
      "/images/projects/scotiabank/scotiabank1.png",
      "/images/projects/scotiabank/scotiabank2.png",
      "/images/projects/scotiabank/scotiabank3.png",
    ],
    github: ["https://github.com/shortcircuits94/scotiabank-hackathon"],
    tech: [SiHtml5, SiCss3, SiJavascript],
    caseStudy: [
      "Created for the Scotiabank Hackathon, this platform aims to improve financial literacy for newcomers to Canada.",
      "Our goal was to design a friendly, intuitive web tool that allows users to find a Wealth Management Advisor using a filtering tool.",
      "I led the frontend development using vanilla HTML, CSS, and JavaScript to build a single-page application using a filtering tool.",
      "Highlights of the project include:",
      "- Allows users to view different advisors and filter based on Specialty, Language, Location and Availability.",
      "- View their information and schedule a call with them there and then.",
    ],
  },
];
