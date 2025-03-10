"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-full h-full relative flex items-center justify-center md:block'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {delay: 2, duration: 0.4, ease: "easeIn"},
          }}
          className='w-[250px] h-[250px] min-[360px]:w-[298px] min-[360px]:h-[298px] mtb:w-[358px] mtb:h-[358px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute'
        >
          <Image 
            src="/photo3.png" 
            priority 
            quality={100} 
            fill 
            alt='photo'
            className='object-contain ml-[6px] xl:ml-3'
          />
        </motion.div>

        <motion.svg 
          className="w-[250px] min-[360px]:w-[300px] mtb:w-[360px] xl:w-[506px] h-[250px] min-[360px]:h-[300px] mtb:h-[360px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#DC143C"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120,360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        
      </motion.div>
    </div>
  )
}

export default Photo