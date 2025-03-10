"use client";
import React from 'react'
import { motion } from "framer-motion";

function Contact() {
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
          <h3 className='text-4xl font-bold'>Contact Me</h3>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact