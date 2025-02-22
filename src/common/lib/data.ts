import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';
import { title } from 'process';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'College Aid Software Intern @ MTA',
    location: 'Brooklyn, New York, United States',
    description:
      'Developed interactive React dashboards with real-time insights and Deepseek LLM for natural language queries. Streamlined EAM software, cutting task time by 50% and boosting workflow efficiency with tailored analytics dashboards.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sept 2024 - Present',
  },
  {
    title: 'SDE @ Capgemini',
    location: 'Mumbai',
    description:
      'Full-Stack Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Oct 2022 - Aug 2023',
  },
  {
    title: 'SDE Intern @ Capgemini',
    location: 'Bengaluru',
    description:
      'Front-end Developer. Secured a Capgemini internship through college recognition, trained in Full Stack, and quickly transitioned to a full-time Software Analyst role due to dedication and skill growth.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Apr 2022 - Oct 2022',
  },
  {
    title: 'Data Research Analyst',
    location: 'Indian Institute of Management Ahmedabad',
    description: `Being in my Undergrad(IS).Processed and analyzed diverse datasets for Keeto, improving extraction accuracy by 10% using NLP and providing valuable insights from thousands of data points.`,
    icon: React.createElement(BookIcon),
    date: 'Apr 2021 - May 2021',
  },
  {
      title: 'Machine Learning Intern',
      location: 'Indian Institute of Technology',
      description: `Being in my Undergrad(IS). Learned Python programming and utilized various libraries to boost skills. Expanded professional networks within the tech community.`,
      icon: React.createElement(BookIcon),
      date: 'Sept 2020 - Oct 2020',
    },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Cogniscruit',
    description: `Generating Interview Questions for Candidates Using Large Language Models (LLMs) while considering GitHub, LinkedIn, and Leetcode.`,
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
    imageUrl: auditMasterImg,
    link: 'https://github.com/Raashil/Cogniscruit',
    status: '\n*Under Development🚧*',
  },
  {
    title: 'ConnectWise',
    description:
      'ConnectWise automates personalized cold emails for software companies using web scraping, NLP, LLMs, and vector databases to identify clients, analyze needs, and create tailored outreach messages.',
    tags: ['Groq', 'LangChain', 'Streamlit', 'ChromaDB', 'Pandas', 'Python'],
    imageUrl: accountingImg,
    link: 'https://github.com/Raashil/ConnectWise_DeepLearning_Project',
  },
  {
    title: 'Facial Recognition with Deepface',
    description:
      'The facial recognition engine uses Swarup Ghosh pre-trained VGG-Face2 weights and preprocessing pipeline for optimal performance. Additional backends like MediaPipe and RetinaFace are supported. A Jupyter Notebook demo showcases its capabilities, while a Kivy UI and Firebase integration are in progress under the feat/seed branch.',
    tags: [
      'Kivy',
      'TensorFlow',
      'CNN',
      'SVM',
      'Open_CV',
      'Firebase',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/JoshuaGottlieb/Facial-Recognition-with-Deepface',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/Raashil/raashil-portfolio',
  },

  {
    title: 'SumAI',
    description:
      'An AI-driven tool leveraging LLAMA3 and TogetherAI to automate meeting summary generation/emailing.',
    tags: [
      'React',
      'TypeScript',
      'TensoFlow',
      'LLama',
      'Python',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/rushi1222/sum.A.I',
  },

   {
      title: 'Blockby',
      description:
        'An efficient and Privacy Preserving Biometric Identification Scheme in Cloud Computing with Blockchain',
      tags: [
        'Blockchain',
        'Ethereum',
        'AES alogorithm',
        'SHA-1',
        'Cloud',
        'Python',
      ],
      imageUrl: surgeImg,
      link: 'https://github.com/Raashil/Biometric-s-ft.-Blockchain',
    },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
