const { Schema, model } = require('mongoose')

const SessionSchema = new Schema({
  protocol: { type: String },
  hpfeed_id: { type: Schema.Types.ObjectId, ref: 'Hpfeed' },
  timestamp: { type: Date },
  source_ip: { type: String },
  source_port: { type: Number },
  destination_port: { type: Number },
  identifier: { type: String },
  honeypot: { type: String }
}, { timestamps: false })

module.exports = model('Session', SessionSchema, 'session')
