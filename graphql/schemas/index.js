const { buildSchema } = require('graphql')
const { types: typesCounts, queries: queriesCounts} = require('./Counts')
const { types: typesDailyStats, queries: queriesDailyStats} = require('./DailyStats')
const { types: typesHpfeed, queries: queriesHpfeed} = require('./Hpfeed')
const { types: typesSessions, queries: queriesSessions} = require('./Session')

const schema = buildSchema(`
  ${typesCounts}
  ${typesDailyStats}
  ${typesHpfeed}
  ${typesSessions}

  type Query {
    ${queriesCounts}
    ${queriesDailyStats}
    ${queriesHpfeed}
    ${queriesSessions}
  }
`)

module.exports = schema