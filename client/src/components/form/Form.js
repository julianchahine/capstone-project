import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import './Form.css';
import { motion } from 'framer-motion'

export default function Form({ onCreateNote }) {
  
  let history = useHistory()
  
  return (
    <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{ opacity: 1 }}>
    <form onSubmit={handleSubmit} action="/asdasd">
      <label htmlFor="text" style={{display: "none"}}>Title</label>
      <input className="input"  type="text" placeholder="Add Title" name="text" required/>
      <br />
      <label htmlFor="text" style={{display: "none"}}>Note</label>
      <textarea type="input"  className="input-text" type="text" placeholder="Add Note" name="title" required/>
      <br />
      <button className="add-button">Add your note</button>
    </form>
    </motion.div>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { text, title } = form.elements
    const newNote = { text: text.value, title: title.value }

    onCreateNote(newNote)
    form.reset()
    text.focus()

    history.push('/notes')
    
  }
}
