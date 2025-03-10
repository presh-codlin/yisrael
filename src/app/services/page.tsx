"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from 'react'

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur.",
    href: ""
  },
  {
    num: "02",
    title: "App Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur.",
    href: ""
  },
]


function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0">
      <div className="w-[90%] xsm:w-full max-w-[850px] tb:max-w-[1024px] xl:max-w-[1280px] laptop:max-w-[1340px] xsm:px-10 mtb:px-6 tb:px-16 lg:px-20 mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
          }} 
          className="flex flex-col min-[720px]:flex-row flex-wrap gap-[60px] justify-between"
        >
          {services.map((service, index) => (
            <div key={index} className="h-[257px] w-full min-[720px]:w-[47%] min-[720px]:max-w-[530px] flex-1 flex flex-col justify-between gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ease-in-out">{service.num}</div>
                <Link href={service.href} className="w-[45px] xl:w-[50px] h-[45px] xl:h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 ease-in-out flex justify-center items-center hover:-rotate-45">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#1c1c22" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    width="25" 
                    height="25"
                  >
                    <line x1="4" y1="4" x2="20" y2="20" />
                    <line x1="20" y1="20" x2="14" y2="20" />
                    <line x1="20" y1="20" x2="20" y2="14" />
                  </svg>
                </Link>
              </div>
              <h2 className="text-[32px] xsm:text-[38px] min-[720px]:text-[32px] md:text-[36px] xl:text-[48px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60 ">{service.description}</p>
              <div className="border-b border-white/20 group-hover:border-accent/80 w-full"/>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services