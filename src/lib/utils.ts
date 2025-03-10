import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  BadgeIcon, 
  CapIcon, 
  Css3, 
  Html5, 
  Js, 
  Nextjs, 
  Reactjs, 
  TailwindCSS, 
  Typescript 
} from "../../public/SvgIcons"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const about = {
  title: "About me",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abraham Precious"
    },
    {
      fieldName: "Phone",
      fieldValue: "0705 7933 171"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian"
    },
    {
      fieldName: "Email",
      fieldValue: "yebosokop@gmil.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English"
    },
  ]
}
export const experience = {
  icon: BadgeIcon,
  title: "My experience",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  items: [
    {
      company: "Exchain-Payment",
      position: "Front-End Developer",
      duration: "Oct 2024 - present",
    },
    {
      company: "Mackey's Food",
      position: "Front-End Developer Intern",
      duration: "Feb 2025 - present",
    },
  ]
}
export const education = {
  icon: CapIcon,
  title: "My education",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  items: [
    {
      institution: "FUT Minna Niger State",
      degree: "Applied Geophysics",
      duration: "2021 - Present",
    },
    {
      institution: "Freecode Camp",
      degree: "Responsive Web Design",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2024",
    },
  ]
}
export const skills = {
  title: "My skills",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  skillList: [
    {
      icon: Html5,
      name: "html-5"
    },
    {
      icon: Css3,
      name: "css 3"
    },
    {
      icon: Js,
      name: "Javascript"
    },
    {
      icon: Reactjs,
      name: "react.js"
    },
    {
      icon: Nextjs,
      name: "next.js"
    },
    {
      icon: TailwindCSS,
      name: "tailwindcss"
    },
    {
      icon: Typescript,
      name: "typescript"
    }
  ]
}

export const projects = [
  {
    image: ["/exchain/exchain1.png", "/exchain/exchain2.png"],
    name: "exchain payment",
    description: "A platform that provides advanced financial payments platform. Seamlessly integrating cryptocurrencies, we empower you to broaden your horizons, simplify transactions, and confidently shape the future of finance. ",
    links:{
        role: "visit",
        url: "https://exchainpayment.com",
      }
  },
  {
    image: ["/exchain/exchain1.png", "/exchain/exchain2.png"],
    name: "Bridge Pay Admin",
    description: "A platform that provides advanced financial payments platform. Seamlessly integrating cryptocurrencies, we empower you to broaden your horizons, simplify transactions, and confidently shape the future of finance. ",
    links:{
        role: "visit",
        url: "https://exchainpayment.com",
      }
  },
  {
    image: ["/exchain/exchain1.png", "/exchain/exchain2.png"],
    name: "Macky's Food",
    description: "A platform that provides advanced financial payments platform. Seamlessly integrating cryptocurrencies, we empower you to broaden your horizons, simplify transactions, and confidently shape the future of finance. ",
    links:{
        role: "visit",
        url: "https://exchainpayment.com",
      }
  },
]
