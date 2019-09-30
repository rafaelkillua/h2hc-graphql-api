const { buildSchema } = require('graphql')
const { types: typesCounts, queries: queriesCounts} = require('./Counts')
const { types: typesDailyStats, queries: queriesDailyStats} = require('./DailyStats')
const { types: typesHpfeed, queries: queriesHpfeed} = require('./Hpfeed')

const schema = buildSchema(`
  ${typesCounts}
  ${typesDailyStats}
  ${typesHpfeed}

  type Query {
    ${queriesCounts}
    ${queriesDailyStats}
    ${queriesHpfeed}
  }
`)

module.exports = schema