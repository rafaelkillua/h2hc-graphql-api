const { Schema, model } = require('mongoose')

const CountsSchema = new Schema({
  date: { type: String },
  identifier: { type: String },
  event_count: { type: Number }
}, { timestamps: false })

module.exports = model('Counts', CountsSchema, 'counts')
