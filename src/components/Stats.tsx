"use client";
import React from 'react'
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 3,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Technologies mastered",
  },
  {
    num: 115,
    text: "Code commits",
  },
]

const Stats = () => {
  return (
    <section className='w-full pb-12'>
      <div className='w-full max-w-[850px] tb:max-w-[1024px] xl:max-w-[1280px] laptop:max-w-[1340px] px-6 xsm:px-16 sm:px-10 md:px-8 mtb:px-6 tb:px-16 lg:px-20 mx-auto'>
        <div className='flex flex-wrap xsm:flex-none gap-3 xsm:gap-6 mx-auto w-full xsm:max-w-[500px] sm:max-w-none'>
          {stats.map((stat, index)=>(
            <div key={index} className='w-[47%] xsm:flex-1 flex gap-4 items-center justify-center xl:justify-start'>
              <CountUp end={stat.num} duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold'/>
              <p className={`${stat.text.length < 14 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats