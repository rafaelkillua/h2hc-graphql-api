
exports.types = `
  type Hpfeed {
    id: ID,
    ident: String,
    timestamp: Date,
    normalized: Boolean,
    channel: String,
    payload: Payload
  }

  type Payload {
    connection_type: String,
    local_host: String,
    connection_protocol: String,
    local_port: Int,
    remote_port: Int,
    remote_hostname: String,
    connection_transport: String,
    remote_host: String,
  }
`

exports.queries = `
`

exports.mutations = `
`
