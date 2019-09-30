const Counts = require('./counts')
const DailyStats = require('./dailyStats')
const Hpfeeds = require('./hpfeeds')

const resolvers = {
  ...Counts,
  ...DailyStats,
  ...Hpfeeds
}

module.exports = resolvers