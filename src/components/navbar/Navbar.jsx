import React from 'react'
import { motion } from 'framer-motion'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'
function Navbar() {
  return (
    <div className='navbar'>
        {/* <Sidebar> */}
        <Sidebar/>
        <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:0.8}} transition={{duration:0.5}} className="brandname">Bezyl Mophat</motion.span>
        <div className="socials">
            <img src="/facebook.png" alt="" />
            <img src="/instagram.png" alt="" />
            <img src="/dribbble.png" alt="" />
            <img src="/youtube.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Navbar