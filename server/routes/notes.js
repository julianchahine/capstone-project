const express = require('express')
const Note = require('../models/Note')

const router = express.Router()

router.get('/', (request, response, next) => {
  Note.find()
    .then(data => response.status(200).json(data))
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params

  Note.findById(id)
    .then(data => {
      if (!data) {
        throw new Error('This is my error!')
      }
      response.status(200).json(data)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.post('/', (request, response, next) => {
  const { text, title } = request.body

  if (text === '' || title === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const newNote = { text, title }

  Note.create(newNote)
    .then(note => response.status(201).json(note))
    .catch(next)
})

router.patch('/:id', (request, response, next) => {
  const { id } = request.params
  const { text, title } = request.body

  if (!text && !title) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  Note.findByIdAndUpdate(id, { text, title }, { new: true })
    .then(note => {
      if (!note) {
        throw new Error()
      }
      response.status(200).json(note)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.delete('/:id', (request, response, next) => {
  const { id } = request.params

  Note.findByIdAndDelete(id)
    .then(note => {
      if (!note) {
        throw new Error()
      }
      response.status(200).json(note)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

module.exports = router
