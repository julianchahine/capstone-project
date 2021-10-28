import { ReactMediaRecorder } from "react-media-recorder";
import { motion } from 'framer-motion'

import './Video.css'

function Video() {
    return (
    <>
  <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{ opacity: 1 }}>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <br /><br />
          <video src={mediaBlobUrl} className="video" controls autoPlay />
        </div>
      )}
    />
  </motion.div>
  </>
)};

export default Video