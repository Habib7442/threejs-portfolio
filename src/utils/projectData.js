import {
  netflix,
  quickPicks,
  blog,
  article,
  fashion,
  youtube,
  myntra,
  blogImg,
  summarizer,
  youtubeDesktop,
  weather,
  weathersingle,
  school,
  schoolsingle,
  astralai,
  astralaisingle
} from "../assets";

const projectData = [
  {
    id: 1,
    img: astralai,
    singleImg: astralaisingle,
    title: "AstralAI",
    technologies: ["Next JS", "Prisma", "Tailwind CSS", "Shedcn"],
    description: [
      "Developed a SaaS application for image-driven communication, leveraging GPT-4 Vision API",
      "Implemented user authentication functionality, allowing users to log in and log out using clerk.",
      "Integrated Stripe payment methods for seamless and secure transactions.",
      "Utilized Prisma database to store data",
    ],
    github: "",
    liveUrl: "https://astralai.vercel.app/",
  },
  {
    id: 2,
    img: blog,
    singleImg: blogImg,
    title: "Blog Website",
    technologies: ["React JS", "Firebase", "Tailwind CSS"],
    description: [
      "Built a blog website using React JS for the frontend and Firebase for the backend.",
      "Implemented user authentication functionality, allowing users to log in and log out.",
      "Added the ability for users to like posts.",
      "Included functionality for users to delete and update their own posts.",
      "Implemented social media sharing functionality for users to share posts on various platforms.",
      "Utilized Firebase to store and retrieve data for posts and user information",
    ],
    github: "https://github.com/Habib7442/the-digital-diary",
    liveUrl: "https://the-digital-diary.web.app/",
  },
  {
    id: 3,
    img: netflix,
    singleImg: netflix,
    title: "Netflix Clone",
    technologies: ["React JS", "Firebase", "SCSS"],
    description: [
      "Built a Netflix clone using React JS for the frontend and Firebase for the backend.",
      "Implemented user authentication functionality, allowing users to log in and log out.",
    ],
    github: "https://github.com/Habib7442/Netflix-Clone",
    liveUrl: "https://net-clone-224.netlify.app/",
  },
  {
    id: 4,
    img: quickPicks,
    singleImg: quickPicks,
    title: "Quick Picks",
    technologies: [
      "React JS",
      "Appwrite",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
    ],
    description: [
      "Developed an impressive and user-friendly e-commerce website using React.js, showcasing strong frontend development skills.",
      " Implemented a robust backend using Node.js and Appwrite, demonstrating proficiency in backend development and API integration.",
      " Utilized Redux for state management, ensuring efficient data flow and seamless user interactions.",
      " Implemented a responsive design that adapts to different screen sizes.",
      " Implemented a user-friendly shopping cart system, allowing customers to easily add and manage their selected items in their shopping cart.",
    ],
    github: "https://github.com/Habib7442/QuickPicks",
    liveUrl: "https://quickpicks123.netlify.app/",
  },
  {
    id: 5,
    img: article,
    singleImg: summarizer,
    title: "Article Summarizer and Extractor",
    technologies: ["React JS", "Redux", "Tailwind CSS", "API"],
    description: [
      "Summarization: Quickly generate concise summaries of lengthy articles.",
      "Content Extraction: Extract relevant content from web pages.",
      "User-Friendly Interface: A simple and intuitive user interface for easy navigation.",
      "Responsive Design: Works seamlessly on both desktop and mobile devices.",
    ],
    github: "https://github.com/Habib7442/article-summarizer-extractor",
    liveUrl: "https://articlesummarease.netlify.app/",
  },
  {
    id: 6,
    img: fashion,
    singleImg: fashion,
    title: "Fashion Landing Page",
    technologies: ["HTML", "CSS", "JavaScript", "Sheryjs"],
    description: ["Fashion website Landing Page"],
    github:
      "https://github.com/Habib7442/landing-pages/tree/master/Fashion%20Website",
    liveUrl: "https://lnkd.in/dv2pMPdv",
  },
  {
    id: 7,
    img: youtube,
    singleImg: youtubeDesktop,
    title: "Youtube Clone",
    technologies: ["React JS", "Material UI", "API"],
    description: [
      "Created a YouTube clone using React.js.",
      "Integrated with external APIs to retrieve and display data on the front-end.",
      "Designed a sleek and dynamic user interface with Material UI and CSS.",
    ],
    github: "https://github.com/Habib7442/Youtube-2.0",
    liveUrl: "https://youtube-habib.netlify.app/",
  },

  {
    id: 8,
    img: myntra,
    singleImg: myntra,
    title: "Myntra Landing Page Clone",
    technologies: ["HTML", "CSS"],

    description: ["Landing page clone of Myntra."],
    github: "https://github.com/Habib7442/Myntra-clone",
    liveUrl: "https://myntraclone7442.netlify.app/",
  },
  {
    id: 9,
    img: weather,
    singleImg: weathersingle,
    title: "Weather Website",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    description: [
      "This web application allows users to check the current weather for a specific location. It uses the OpenWeatherMap API to fetch weather data.",
      "Display current weather conditions, including temperature, humidity, and wind speed.",
      "Switch between temperature units (Celsius and Fahrenheit).",
    ],
    github: "https://github.com/Habib7442/weather",
    liveUrl: "https://weather-app-habib.netlify.app/",
  },
  {
    id: 10,
    img: school,
    singleImg: schoolsingle,
    title: "School Website",
    technologies: ["React JS", "Tailwind CSS", "Firebase"],
    description: [
      "This is a school website using React.js.",
      "It is a responsive and user-friendly website.",
      "It is a fully functional website.",
    ],
    github: "https://github.com/Habib7442/weather",
    liveUrl: "https://jcbose.org.in/",
  },
];

export default projectData;
