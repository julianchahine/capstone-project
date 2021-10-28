import { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Form from './form/Form'
import Error from './error/Error'
import getNotes from '../services/getNotes'
import Note from './note/Note'
import NoteDetails from './notedetails/NoteDetails'

import './Notes.css'

import * as Ai from 'react-icons/ai'

function Notes() {
  const [notes, setNotes] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    // GET http://localhost:4000/api/notes
    getNotes()
      .then(data => setNotes(data))
      .catch(error => setErrorMessage('Could not retrieve Notes'))
  }, [])

  return (
    <>
      <motion.main
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {errorMessage && <Error errorMessage={errorMessage} />}
        <AnimatePresence>
          <Route path="/notes/write">
            <Form onCreateNote={createNote} />
          </Route>
        </AnimatePresence>

        <Route path="/notes" exact>
          <Link to="/notes/write" className="plus-link">
            <Ai.AiFillPlusCircle />
          </Link>

          <div className="container">
            {notes.map(note => (
              <Note note={note} key={note._id} onDeleteNote={deleteNote} />
            ))}
          </div>
        </Route>

        <Route path="/notes/:id" exact>
          <NoteDetails />
        </Route>
      </motion.main>
    </>
  )
  function createNote(note) {
    console.log(note)
    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(note),
    })
      .then(res => res.json())
      .then(data => setNotes([data, ...notes]))
      .catch(error => setErrorMessage('Could not create new Note'))
  }

  function deleteNote(noteId) {
    // DELETE /api/notes/{id}
    fetch(`/api/notes/${noteId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        const netNotes = notes.filter(note => note._id !== data._id)
        setNotes(netNotes)
      })
      .catch(error => setErrorMessage('Note could not be deleted'))
  }
}

export default Notes
