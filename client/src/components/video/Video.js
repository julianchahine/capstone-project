import { ReactMediaRecorder } from 'react-media-recorder'
import { motion } from 'framer-motion'

import './Video.css'
import share from '../../images/share.png'

function Video() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ><br />
        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="status">Status: {status}</p>              
              
              
              <video src={mediaBlobUrl} className="video" controls autoPlay />
              <br />
              <br />
              <button className="videobutton" onClick={startRecording}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
              <br />Start</button>
              <button className="videobutton" onClick={stopRecording}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="2em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"></path></g></svg>
              <br />Stop</button>
              <br /><br />
              <img src={share} width="300" className="shareicons" />
            </div>
          )}
        />
      </motion.div>
    </>
  )
}

export default Video
