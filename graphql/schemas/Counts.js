
exports.types = `
  type Counts {
    id: ID,
    date: String,
    identifier: String,
    event_count: Int
  }
`

exports.queries = `
  countsList ( perPage: Int, page: Int ): [Counts]
`

exports.mutations = `
  teste: String
`
