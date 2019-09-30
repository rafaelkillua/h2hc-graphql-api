const Counts = require('./counts')
const DailyStats = require('./dailyStats')
const Hpfeeds = require('./hpfeeds')
const Sessions = require('./sessions')

const resolvers = {
  ...Counts,
  ...DailyStats,
  ...Hpfeeds,
  ...Sessions
}

module.exports = resolvers