
exports.types = `
  type DailyStats {
    id: ID,
    channel: String,
    date: String,
    hourly: [Hour]
  }

  type Hour {
    hour: Int
    value: Int
  }
`

exports.queries = `
  dailyStats ( perPage: Int, page: Int ): [DailyStats!]!
`
