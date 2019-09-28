
exports.types = `
  type Counts {
    id: ID,
    date: String,
    identifier: String,
    event_count: Int
  }
`

exports.queries = `
  counts ( perPage: Int, page: Int ): [Counts!]!
`
