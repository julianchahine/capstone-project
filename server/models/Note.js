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

module.exports = mongoose.model('Note', schema)
