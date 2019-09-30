
exports.types = `
  type Session {
    id: ID,
    protocol: String,
    hpfeed_id: Hpfeed,
    timestamp: String,
    timestampString: String,
    source_ip: String,
    source_port: Int,
    destination_port: Int,
    identifier: String,
    honeypot: String
  }
`

exports.queries = `
  sessions ( perPage: Int, page: Int ): [Session!]!
`
