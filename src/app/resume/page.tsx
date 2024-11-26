"use client";
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
} from '@/components/SvgIcons'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion'; 
import React, { useState } from 'react'

const about = {
  title: "About me",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abraham Precious"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 705 7933 171"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
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
const experience = {
  icon: <BadgeIcon/>,
  title: "My experience",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  items: [
    {
      company: "Exchain-Payment",
      position: "Front-End Developer Intern",
      duration: "2024 - present",
    },
    {
      company: "Exchain-Payment",
      position: "Front-End Developer",
      duration: "2024 - present",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance",
      duration: "0ctober 2024",
    },
    {
      company: "Exchain-Payment",
      position: "Junior Front-End Developer",
      duration: "2024 - present",
    },
    {
      company: "Exchain-Payment",
      position: "Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Exchain-Payment",
      position: "Front-End Developer",
      duration: "2022 - 2023",
    },
    {
      company: "front-End Mentor",
      position: "Front-End Developer",
      duration: "2023 - 2024",
    },
  ]
}
const education = {
  icon: <CapIcon/>,
  title: "My education",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Front-End Development Bootcamp",
      duration: "2022",
    },
    {
      institution: "Freecode Camp",
      degree: "Responsive Web Design",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "w3schools.com",
      degree: "Front-end Web-Dev JavaScript & Reactjs",
      duration: "2022 - 2023",
    },
  ]
}
const skills = {
  title: "My skills",
  description: "Lorem dolor sit amet consectotur adipiscing elit. Voluptates quibusdam sunt explicabo inventore.",
  skillList: [
    {
      icon: <Html5/>,
      name: "html-5"
    },
    {
      icon: <Css3/>,
      name: "css 3"
    },
    {
      icon: <Js/>,
      name: "Javascript"
    },
    {
      icon: <Reactjs/>,
      name: "react.js"
    },
    {
      icon: <Nextjs/>,
      name: "next.js"
    },
    {
      icon: <TailwindCSS/>,
      name: "tailwindcss"
    },
    {
      icon: <Typescript/>,
      name: "typescript"
    }
  ]
}



function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const tabs = [
    "experience",
    "education",
    "skills",
    "about me",
  ]
  const handleTab = (tab: string) =>{
    // const currentTab = tabs[index];
    setActiveTab(tab);
    
  }
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[60px]'>
          <div className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            {tabs.map((tab, index)=>(
              <span 
                key={index} 
                onClick={()=>handleTab(tab)}
                className={`inline-flex items-center capitalize w-full justify-center rounded-[8px] px-3 py-4 transition-all text-base cursor-pointer ${activeTab === tab ? "bg-accent text-primary font-bold shadow-sm" : "bg-[#27272c] text-white"}`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className='min-h-[70vh] w-full'>
            <div className='w-full min-h-[480px]'>
              {activeTab === "experience" ? (
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experience.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item,index)=>(
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              ) : activeTab === "education" ? (
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {education.items.map((item,index)=>(
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              ) : activeTab === "skills" ? (
                  <div className='flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                      <h3 className='text-4xl font-bold'>{skills.title}</h3>
                      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                    </div>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[38px] gap-4'>
                      {skills.skillList.map((skill, index)=>(
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='group-hover:text-accent transition-all duration-300'>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
              ) : activeTab === "about me" && (
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-7 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item, index)=>(
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume

