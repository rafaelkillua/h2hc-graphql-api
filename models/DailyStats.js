const { Schema, model } = require('mongoose')

const DailyStatsSchema = new Schema({
  channel: { type: String },
  date: { type: String },
  hourly: { type: [Number] }
}, { timestamps: false })

module.exports = model('DailyStats', DailyStatsSchema)
