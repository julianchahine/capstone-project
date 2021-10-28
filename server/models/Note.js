const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

// Collection: 'cards'
// Mongoose Model: 'Card' --> MongoDB Collection: 'cards'
// Mongoose Model: 'User' --> MongoDB Collection: 'users'

module.exports = mongoose.model('Note', schema)
