import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

import './Note.css'

import * as Io from 'react-icons/io'
import * as Fa from 'react-icons/fa'

function Note({ note, onDeleteNote }) {
  return (
    <motion.div  exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{ opacity: 1 }}>
    <Container>
      <DeleteButton onClick={() => onDeleteNote(note._id)}>x</DeleteButton>
      <NoteTitle>{note.text}</NoteTitle>
      <NoteText>{note.title}</NoteText>
      <Link to={ `/notes/${note._id}` } className="more-link">More</Link>
      
      <br/><br/>
      <Span></Span><br />
        <a href="whatsapp://send?text=This is WhatsApp sharing example using link" className="share" data-action="share/whatsapp/share"  
        target="_blank"><Fa.FaWhatsapp /></a>   
        <a href="whatsapp://send?text=This is WhatsApp sharing example using link" className="share" data-action="share/whatsapp/share"  
        target="_blank"><Fa.FaTelegramPlane /></a>
        <a href="whatsapp://send?text=This is WhatsApp sharing example using link" className="share" data-action="share/whatsapp/share"  
        target="_blank"><Fa.FaFacebook /></a>
        
        
    </Container>
    </motion.div>
  )
}

const Span = styled.span`
  color: white;
  font-size: 10px;
  font-weight: bold;
`

const NoteTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: white;
  margin: 0;
  color: #afafaf;
`

const NoteText = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: white;
  margin: 1em 0;
  color: #fff;
`

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px; 
  background: #2d4858;
  margin: 1em;
  box-shadow: 1px 1px 25px #7fc0e76e;
  border-radius: 15px;
  transition: .5s;
  :hover {
    transform: scale(1.1);
    backgroubd: #42718d;
  }
`

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  background: #395f76;
  transition: .5s;
  border: 0;
 
 :hover {
  background: #192e3a;
  cursor: pointer;
 }
  
  ` 

export default Note
