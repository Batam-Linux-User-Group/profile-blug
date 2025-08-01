import React from 'react'
import {motion} from 'motion/react'

const TypeWriter = ( { text }) => {
  return (
    <>
      {text.split("").map((l, i) => {
        return <span key={`${text} - ${i}`}>{l}</span>
      })}
    </>
  )
}

export default TypeWriter