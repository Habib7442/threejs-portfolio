import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  nextJsIcon,
  firebaseIcon,
  tailwindIcon,
  gitIcon,
  mongoIcon,
  nodejsIcon,
  bootstrapIcon,
  threejsIcon,
  cdac,
  unschool,
  linkedin,
  github,
  resume
} from "../assets";

const technologies = [
  {
    name: "HTML 5",
    icon: htmlIcon,
  },
  {
    name: "CSS 3",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },

  {
    name: "React JS",
    icon: reactIcon,
  },
  {
    name: "Next JS",
    icon: nextJsIcon,
  },
  {
    name: "Bootstrap",
    icon: bootstrapIcon,
  },

  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
  },

  {
    name: "MongoDB",
    icon: mongoIcon,
  },
  {
    name: "Node JS",
    icon: nodejsIcon,
  },
  //   {
  //     name: "Three JS",
  //     icon: threejsIcon,
  //   },
  {
    name: "git",
    icon: gitIcon,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer (Intern)",
    company_name: "CDAC Silchar",
    icon: cdac,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Designed a visually appealing course website with a clean and modern layout to showcase courses in an effective manner.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Used dynamic visuals and animations to bring the website's content to life.",
    ],
  },
  {
    title: "React Js Developer (Intern)",
    company_name: "Unschool",
    icon: unschool,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sept 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed a Full Stack Portfolio website using React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const social = [
  {
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/habib-tanwir/",
  },
  {
    name: "github",
    icon: github,
    link: "https://github.com/Habib7442",
  },
  {
    name: "resume",
    icon: resume,
    link: "https://cloud.appwrite.io/v1/storage/buckets/64d5a5e6dc57eec596f2/files/6578055d6d5d856f5932/view?project=64a69dbd67db0755a992&mode=admin",
  }
]

export { technologies, experiences, social };
