import { motion } from 'motion/react'
import React from 'react'

const FadeLeft = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0, x: 10}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true, amount:0.5}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeLeft