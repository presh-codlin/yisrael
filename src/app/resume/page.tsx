"use client";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { about, education, experience, skills } from '@/lib/utils';
import { motion } from 'framer-motion'; 
import React, { useState } from 'react'

function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const tabs = [
    "experience",
    "education",
    "skills",
    "about me",
  ]
  const handleTab = (tab: string) =>{
    setActiveTab(tab);
  }
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className='min-h-[80vh] flex sm:items-center items-start justify-center py-12 xl:py-0'
    >
      <div className='w-[90%] h-fit xsm:w-full max-w-[850px] tb:max-w-[1024px] xl:max-w-[1280px] laptop:max-w-[1340px] xsm:px-10 mtb:px-6 tb:px-16 lg:px-20 mx-auto'>
        <div className='flex flex-col h-fit md:flex-row gap-[40px] mtb:gap-[60px] pb-10'>
          <div className='grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-4 md:grid-cols-1 w-full max-h-[320px] md:max-w-[280px] tb:max-w-[300px] xl:max-w-[380px] mx-auto xl:mx-0 gap-6'>
            {tabs.map((tab, index)=>(
              <span 
                key={index} 
                onClick={()=>handleTab(tab)}
                className={`inline-flex items-center capitalize w-full max-h-[52px] justify-center rounded-[8px] px-3 py-4 transition-all text-base cursor-pointer ${activeTab === tab ? "bg-accent text-primary font-bold shadow-sm" : "bg-[#27272c] text-white"}`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className='w-full'>
            <div className='w-full h-fit tb:min-h-[480px]'>
              {activeTab === "experience" ? (
                <div className='flex flex-col gap-[30px] text-center md:text-left'>
                  <h3 className='text-4xl font-bold'>{experience.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto mtb:mx-0'>{experience.description}</p>
                  <ScrollArea className='max-h-[400px]'>
                    <ul className='grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item,index)=>(
                        <li key={index} className='bg-[#232329] h-[184px] py-2 sm:py-6 px-6 sm:px-10 rounded-xl flex flex-col justify-center items-center md:items-start mtb:items-center xl:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl w-full max-w-[260px] min-h-[25px] sm:min-h-[40px] text-center lg:text-left'>{item.position}</h3>
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
                  <ScrollArea className='max-h-[400px]'>
                    <ul className='grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                      {education.items.map((item,index)=>(
                        <li key={index} className='bg-[#232329] h-[184px] py-2 sm:py-6 px-6 sm:px-10 rounded-xl flex flex-col justify-center items-center mtb:items-center xl:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[25px] sm:min-h-[40px] text-center lg:text-left'>{item.degree}</h3>
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
                    <ul className='grid grid-cols-2 min-[442px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-[38px] gap-4'>
                      {skills.skillList.map((skill, index)=>(
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[120px] min-[700px]:h-[150px] md:h-[100px] mtb:h-[120px] tb:h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='group-hover:text-accent transition-all duration-300'>
                                  <skill.icon/>
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
                <div className='flex flex-col gap-[30px] min-[360px]:text-center xsm:text-left'>
                  <h3 className='text-4xl xsm:min-w-[600px] md:min-w-fit font-bold mx-auto md:mx-0'>{about.title}</h3>
                  <p className='max-w-[280px] min-[360px]:max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                  <ul className='grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-1 tb:grid-cols-2 gap-7 gap-y-6 w-full max-w-[600px] md:max-w-full mx-auto md:mx-0'>
                    {about.info.map((item, index)=>(
                      <li key={index} className='flex items-center w-[280px] min-[360px]:w-auto xsm:max-w-[400px] md:max-h-fit min-[360px]:justify-center xsm:justify-start gap-10 min-[360px]:gap-3 min-[580px]:gap-8 md:gap-10 tb:gap-4 mx-auto min-[360px]:mx-0'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-lg xl:text-xl'>{item.fieldValue}</span>
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

