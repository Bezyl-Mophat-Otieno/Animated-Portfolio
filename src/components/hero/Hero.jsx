import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion'

const textvariants = {
  initial:{
    x:-500,
    opacity:0

  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerchildren:0.3
    }
  },
  scrollButton:{
    y:10,
    opacity:0,
    transition:{
      duration:2,
      repeat:Infinity

    }

  }
}


const slidervariant = {
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror"
    }
  },
}

function Hero() {
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textcontainer" variants={textvariants} initial = "initial" animate = "animate">
            <motion.h2 variants={textvariants} >Software Engineer & Artist</motion.h2>
            <motion.div variants={textvariants} className="buttons">
                <motion.button variants={textvariants} className="btn">Hire Me</motion.button>
                <motion.button  variants={textvariants} className="btn">See My Work</motion.button>
            </motion.div>
            <motion.img variants={textvariants} src="/scroll.png" alt="" srcset="" animate="scrollButton" />
        </motion.div>
        </div>
        <motion.div variants={slidervariant} initial="initial" animate="animate" className="slidingtext">
          Technical Writer and Blogger
        </motion.div>
        <div className="imgcontainer">
        <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero