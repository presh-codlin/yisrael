"use client";
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { projects } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

function Work() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0">
      <div className="w-[90%] xsm:w-full max-w-[850px] tb:max-w-[1024px] xl:max-w-[1280px] laptop:max-w-[1340px] xsm:px-10 mtb:px-6 tb:px-16 lg:px-20 mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
          }} 
          className="grid grid-cols-3 gap-[30px] justify-between"
        >
          {projects.map((project, index ) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                top: 20
              }}
              animate={{
                opacity: 1,
                top: 0,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
              }}
              className='w-full flex flex-col p-6 gap-4 rounded-[12px] bg-[#232329] shadow-md'
            >
              <div className='w-full aspect-video rounded-[12px] relative overflow-hidden'>
                <ProjectImage image={project.image}/>
              </div>
              <div className='flex flex-col gap-4 text-left'>
                <h3 className='h3 text-accent capitalize font-bold'>{project.name}</h3>
                <p className='text-base line-clamp-3 text-white font-normal'>{project.description}</p>
                <Link href={project.links.url} target='blank' className='w-full px-6 py-2 bg-accent flex gap-4 items-center justify-center rounded-[8px] text-lg capitalize text-white font-medium text-center'>
                  <span>{project.links.role}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#fff" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    width="20" 
                    height="20"
                    className='-rotate-45'
                  >
                    <line x1="4" y1="4" x2="20" y2="20" />
                    <line x1="20" y1="20" x2="14" y2="20" />
                    <line x1="20" y1="20" x2="20" y2="14" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Work

const ProjectImage = ({image} : {image: string[]}) => {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const imageSlider = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % image.length);
        setIsFading(false); // Start fade-in effect
      }, 500); // Match this duration to the CSS fade-out time

    }, 7000);

    return () => clearInterval(imageSlider);
  }, [image]);

  return (
    <div className="relative w-full h-full">
      <Image
        src={image[current]}
        id="workImg"
        alt="project-image"
        fill
        className={clsx(
          "transition-opacity duration-700 ease-in-out",
          isFading ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
};
