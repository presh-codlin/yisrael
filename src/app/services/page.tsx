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
    title: "Mobile App Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur.",
    href: ""
  },
  {
    num: "03",
    title: "Graphics Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur.",
    href: ""
  },
  {
    num: "04",
    title: "Graphics Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur.",
    href: ""
  },
]


function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
          }} 
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#1c1c22" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    width="25" 
                    height="25"
                  >
                    <line x1="4" y1="4" x2="20" y2="20" />
                    <line x1="20" y1="20" x2="14" y2="20" />
                    <line x1="20" y1="20" x2="20" y2="14" />
                  </svg>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60 ">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services