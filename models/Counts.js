const { Schema } = require('mongoose')

const CountsSchema = new Schema({
  date: { type: String },
  identifier: { type: String },
  event_count: { type: Number }
}, { timestamps: false })

module.exports = mongoose.model('Counts', CountsSchema)
