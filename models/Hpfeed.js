const { Schema } = require('mongoose')

const HpfeedSchema = new Schema({
  ident: { type: String },
  timestamp: { type: Date },
  normalized: { type: Boolean },
  channel: { type: String },
  payload: {
    connection_type: { type: String },
    local_host: { type: String },
    connection_protocol: { type: String },
    local_port: { type: Number },
    remote_port: { type: Number },
    remote_hostname: { type: String },
    connection_transport: { type: String },
    remote_host: { type: String },
  }
}, { timestamps: false })

module.exports = mongoose.model('Hpfeed', HpfeedSchema)
