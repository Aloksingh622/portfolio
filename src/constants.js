// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import ai from "./assets/tech_logo/ai.png"
import aws from "./assets/tech_logo/aws.png"
import railway from "./assets/tech_logo/railway.svg"
import render from "./assets/tech_logo/render.jpg"
import api from "./assets/tech_logo/api.png"
import Websocket from "./assets/tech_logo/websocket.png"
import redis from "./assets/tech_logo/redislogo.jpg"
// import rag from "./assets/tech_logo"
import db from "./assets/tech_logo/db.png"
import n8n from "./assets/tech_logo/n8n.png"
import lang from "./assets/tech_logo/lang.jpeg"
import rag from "./assets/tech_logo/rag.png"
import imagekit from "./assets/tech_logo/imagekit.jpeg"
import bervo from "./assets/tech_logo/brevo.png"
import clerk from "./assets/tech_logo/ckerk.jpeg"
import Inngest from "./assets/tech_logo/inngest.png"
import jwt from "./assets/tech_logo/jwt.svg"
import smtp from "./assets/tech_logo/smtp.jpeg"
import chatbot from "./assets/tech_logo/chatbot.jpeg"
import daisy from "./assets/tech_logo/daisy.jpeg"



import kbp from "./assets/work_logo/kbp.jpeg"


// Education Section Logo's
import kitlogo from "./assets/education_logo/kit.jpeg"
import aps from "./assets/education_logo/aps.png"

// Project Section Logo's

import codeg from "./assets/work_logo/codeg.png"
import nexus from "./assets/work_logo/nexus.png"
import vs from "./assets/work_logo/vs.png"
import swiggy from "./assets/work_logo/swiggy.png"
import site from "./assets/work_logo/site.png"
import mausam from "./assets/work_logo/mausam.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'DaisyUI ', logo: daisy },

    ],
  },


  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Redis', logo: redis },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Websocket', logo: Websocket },
      { name: 'Rest Api', logo: api },
      { name: 'JWT', logo: jwt },
      { name: 'Smtp', logo: smtp },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'Type Script', logo: typescriptLogo },
    ],
  },

  {
    title: 'AI & Automation',
    skills: [
      { name: 'AI Fundamentals', logo: ai },
      { name: 'Vector Databases', logo: db },
      { name: 'Lang Chain', logo: lang },            // workflow icon
      { name: 'RAG', logo: rag },
      { name: 'n8n', logo: n8n },
      { name: 'Chatbot', logo: chatbot },

    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Aws', logo: aws },
      { name: 'Railway', logo: railway },
      { name: 'Render', logo: render },
      { name: 'Imagekit', logo: imagekit },
      { name: 'Clerk', logo: clerk },
      { name: 'Inngest', logo: Inngest },
      { name: 'Brevo', logo: bervo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: kbp, // replace with the actual company logo import
    role: "Backend & AI Automation Developer (Intern)",
    company: "KPB Supports Solutions", // replace with actual name
    date: "Jul 2025 - Aug 2025",
    desc: "Worked on backend development and AI automation projects, integrating APIs and building a custom chatbot for the company. Implemented RESTful APIs, handled database operations",
    skills: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "Gemini API",
      "git",
      "github"
    ],
  },

];

export const education = [
  {
    id: 0,
    img: kitlogo, // replace with actual Kashi Institute of Technology logo import
    school: "Kashi Institute of Technology, Varanasi",
    date: "Aug 2023 - July 2026",
    grade: "73%",
    desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from Kashi Institute of Technology, Varanasi. Throughout my BCA, I developed a solid understanding of programming fundamentals, database management, and web development. I studied subjects such as C Programming, Java, Data Structures, Computer Networks, and Software Engineering. I also participated in coding activities and academic projects that helped strengthen my problem-solving and development skills.",
    degree: "Bachelor of Computer Applications - BCA",
  }
  ,
  {
    id: 1,
    img: aps, // replace with the actual Army Public School logo import
    school: "Army Public School, Varanasi",
    date: "Apr 2021 - Mar 2022",
    grade: "89%",
    desc: "I completed my Class 12 education from Army Public School, Varanasi, under the CBSE board, specializing in Physics, Chemistry, and Mathematics (PCM). This strong academic foundation in core science subjects has been instrumental in shaping my analytical and problem-solving skills.",
    degree: "CBSE (XII) - PCM",
  },
  {
    id: 2,
    img: aps, // replace with the actual Army Public School logo import
    school: "Army Public School, Varanasi",
    date: "Apr 2019 - Mar 2020",
    grade: "84%",
    desc: "I completed my Class 10 education from Army Public School, Varanasi, under the CBSE board. This period laid the groundwork for my academic journey, fostering discipline, curiosity, and a passion for continuous learning.",
    degree: "CBSE (X)",
  }





];

export const projects = [
  {
    id: 0,
    title: "CodeG – Real-Time Coding Platform",
    description:
      "CodeG is a modern, real-time coding platform that bridges the gap between individual learning and collaborative programming. It offers a rich set of features including problem-solving with visible & hidden test cases, POTD (Problem of the Day), real-time pair programming with integrated voice chat, competitive coding contests with live leaderboards, and an AI-powered Time & Space Complexity assistant. The beautifully animated, responsive UI supports both dark and light modes, ensuring a smooth and engaging user experience. Ideal for developers, students, and coding enthusiasts who want to learn, compete, and collaborate effectively.",
    image: codeg,
    tags: ["React JS", "Node JS", "MongoDB", "express", "Cloudinary", "Firebase", "WebRTC", "Tailwind CSS", "Judge0 API", "Gemini APT", "Razorpay"],
    github: "https://github.com/Aloksingh622/Code_g_aws",
    webapp: "https://www.codeg.thealok.shop"
  }
  ,
  {
    id: 1,
    title: "Nexus",
    description:
      "A modern social networking platform enabling users to connect, chat, and collaborate seamlessly. Nexus offers features like real-time messaging, video calls, user discovery, connection management, and personalized profiles — all within a sleek and responsive UI. Integrated with Bervo for messaging reliability, ImageKit for optimized media handling, and Inngest for background task automation, Nexus ensures smooth performance and scalability.",
    image: nexus, // replace with your Nexus logo variable
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Clerk Auth", "Socket.io", "WebRTC", "Bervo", "ImageKit", "Inngest"],
    github: "https://github.com/Aloksingh622/Nexus_frontend", // replace with your actual repo link
    webapp: "https://nexus.thealok.shop/", // replace with your live app link
  },
  {
    id: 2,
    title: "AI Virtual Assistant",
    description:
      "An intelligent voice-activated assistant capable of performing tasks like opening YouTube or any website, fetching real-time answers, and engaging in natural conversations. Built with a responsive frontend and robust backend, the assistant leverages Google's Gemini API for advanced AI capabilities, Cloudinary for seamless media storage, and integrates voice recognition & speech synthesis for a fully interactive experience.",
    image: vs, // replace with your assistant logo variable
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Gemini API",
      "Cloudinary",
      "Speech Recognition",
      "Text-to-Speech"
    ],
    github: "https://github.com/Aloksingh622/vs", // replace with your repo link
    webapp: "https://virtual-assistant.thealok.shop", // replace with your live link
  }
  ,
  {
    id: 3,
    title: "SiteSmith",
    description:
      "A beginner-friendly platform to build basic static websites effortlessly with real-time live preview. Users can customize layouts, colors, and content instantly, then deploy their site to Netlify with a single click — no coding skills required. Perfect for quick portfolios, landing pages, or event websites.",
    image: site, // replace with your actual logo variable
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Monaco Editor",
      "Netlify API",
      "HTML",
      "CSS",
      "JavaScript",
      "Gemini API"
    ],
    github: "https://github.com/yourusername/sitesmith", // replace with your repo link
    webapp: "https://sitesmith.example.com/", // replace with your live link
  }
  ,
  {
    id: 5,
    title: "Swiggy Clone",
    description:
      "A fully functional food ordering platform replicating Swiggy’s core experience, including add-to-cart, checkout, restaurant search, and live order updates. The highlight of this project is the integration of Swiggy’s real-time API, requiring deep understanding of its complex structure and data handling. Delivers a smooth, responsive UI with dynamic data rendering and seamless cart management.",
    image: swiggy, // replace with your Swiggy Clone logo variable
    tags: [
      "React JS",
      "Tailwind CSS",
      "Redux Toolkit",
      "Swiggy API",

    ],
    github: "https://lnkd.in/ejE8ij4n", // replace with your repo link
    webapp: "https://www.linkedin.com/feed/update/urn:li:activity:7332999738906001408/", // replace with your live link
  },
  {
  id: 6,
  title: "Mausam Mitra",
  description:
    "Mausam Mitra is an AI-powered weather application that provides real-time weather updates with natural, conversational responses. Unlike traditional weather apps, it leverages LLMs to explain forecasts in a human-like way, making weather insights more intuitive and user-friendly. The platform integrates APIs for accurate weather data, supports city-based search, and delivers personalized suggestions (like travel or clothing advice) based on conditions. With a clean, responsive UI and smooth animations, Mausam Mitra ensures users get not just numbers, but meaningful weather insights for daily decision-making.",
  image: mausam, // replace with your actual logo/image import
  tags: ["React JS", "Node JS", "Express", "Tailwind CSS", "OpenWeather API", "Gemini API"],
  github: "https://github.com/Aloksingh622/mausam", // update if you have repo
  webapp: "https://mausammitra.thealok.shop" // update with your deployed link
}


];  