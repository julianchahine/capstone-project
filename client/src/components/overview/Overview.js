import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import note from '../../images/note.png'
import voice from '../../images/voice.png'
import video from '../../images/video.png'
import pic from '../../images/pic.png'

import './Overview.css'

import * as Cg from 'react-icons/cg'
import * as Fa from 'react-icons/fa'
import * as Bi from 'react-icons/bi'

function Overview() {
  return (
    <>
      <motion.div
        exit={{ translateX: '100%' }}
        initial={{ translateX: '100%' }}
        animate={{ translateX: '0%' }}
      >
        <h2 class="main__title">choose now</h2>
        <div class="main__subcontainer">
          <Link to="/notes" class="main__box">
            <Cg.CgNotes />
            <h3>My Notes</h3>
          </Link>
          <Link to="/voice" className="main__box">
            <Fa.FaMicrophoneAlt />
            <h3>My Voice Records</h3>
          </Link>
          <Link to="/video" className="main__box">
            <Bi.BiMovie />
            <h3>My Videos</h3>
          </Link>
          <Link to="/Pictures" className="main__box">
            <Cg.CgImage />
            <h3>My Pictures</h3>
          </Link>
        </div>
        <br />
        <button className="desktopview">
          <Bi.BiDesktop /> Enable Desktop View
        </button>
      </motion.div>
    </>
  )
}

export default Overview
