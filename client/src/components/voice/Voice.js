import './Voice.css'
import React from 'react'
import { motion } from 'framer-motion'
import { useAudioRecorder } from '@sarafhbk/react-audio-recorder'

import share from '../../images/share.png'

import * as Fa from 'react-icons/fa'
import * as Bs from 'react-icons/bs'
import * as Ri from 'react-icons/ri'
import * as Ai from 'react-icons/ai'
import * as Gr from 'react-icons/gr'

function Voice() {
  const {
    audioResult,
    timer,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    errorMessage,
  } = useAudioRecorder()
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span className="iconm">
        <Fa.FaMicrophoneAlt />
      </span>
      <br />
      <br />
      <audio controls src={audioResult} />
      <p className="status">
        Status : <b>{status}</b>
        <br />
        <font size="1">
          Error Message : <b>{errorMessage}</b>
        </font>
      </p>
      <p></p>
      <div className="controls">
        <p>
          <font color="white">
            {new Date(timer * 1000).toISOString().substr(11, 8)}
          </font>
        </p>
        <div>
          <button onClick={startRecording}>
            <Bs.BsFillRecordCircleFill />
            <br />
            Start <br />
          </button>
          <button onClick={stopRecording}>
            <Ri.RiStopFill />
            <br />
            Stop
          </button>
          <button onClick={pauseRecording}>
            <Ai.AiOutlinePauseCircle />
            <br />
            Pause
          </button>
          <button onClick={resumeRecording}>
            <Gr.GrResume />
            <br />
            Resumee
          </button>
        </div>
      </div>
      <br />
      <img src={share} width="300" className="shareicons" />
    </motion.div>
  )
}

export default Voice
