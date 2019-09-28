const { buildSchema } = require('graphql')
const { types: typesCounts, queries: queriesCounts} = require('./Counts')
const { types: typesDailyStats, queries: queriesDailyStats} = require('./DailyStats')

const schema = buildSchema(`
  ${typesCounts}
  ${typesDailyStats}

  type Query {
    ${queriesCounts}
    ${queriesDailyStats}
  }
`)

module.exports = schema