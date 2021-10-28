import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import getNotes from '../../services/getNotes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import './NoteDetails.css'
import backbutton from '../../images/back.png'

function NoteDetails() {
  useEffect(() => {
    // GET http://localhost:4000/api/notes
    getNotes()
      .then(data => setNotes(data))
      .catch(error => setErrorMessage('Could not retrieve Notes'))
  }, [])

  const [notes, setNotes] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const { id } = useParams()

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        {notes
          .filter(note => note._id === id)
          .map(filteredNote => (
            <div>
              <p className="headline">Deine Notiz</p>

              <br />

              <div className="note_details_text">
                <p className="note_details_title">{filteredNote.text}</p>
                <br />
                {filteredNote.title}
              </div>
            </div>
          ))}

        <br />

        <Link to="/notes">
          <img src={backbutton} className="back-button" />
        </Link>
      </Container>
    </motion.div>
  )
}

const Container = styled.section`
  position: relative;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

export default NoteDetails
