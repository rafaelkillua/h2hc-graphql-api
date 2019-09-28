const { Schema } = require('mongoose')

const DailyStatsSchema = new Schema({
  channel: { type: String },
  date: { type: String },
  hourly: { type: [Number] }
}, { timestamps: false })

module.exports = mongoose.model('DailyStats', DailyStatsSchema)
