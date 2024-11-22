import React from 'react'
import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"]
  }
}

const reverseIndex = (index: number) =>{
  const totalSteps = 6.
  return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index)=>(
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={stairAnimation}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className='h-full w-full bg-accent relative'
        />
      ))}
    </>
  )
}

export default Stairs;