import React from 'react'
import { motion } from 'framer-motion'
const variants ={
    open:{
        transition:{
            staggerChildren:0.1,
        }
        
    },
    closed:{

        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
        }
    }
}

const itemvariant ={
    open:{
        y:0,
        opacity:1,
        transition:{
            y:{stiffness:1000,velocity:-100}
        }
    
        
    },
    closed:{
        y:50,
        opacity:0,
        transition:{
            y:{stiffness:1000,velocity:-100}
        }
    }
}

function Links() {
    const items  = ["Homepage","Portfolio",,"Services","About","Contact"]
  return (
    <motion.div className='links' variants={variants}>
        {items.map((item,index)=>{

            return <motion.a variants={itemvariant} whileHover={{scale:1.1}}whileTap={{scale:0.8}} href={`#${item}`} key={index}>{item}</motion.a>
        })}



    </motion.div>
  )
}

export default Links