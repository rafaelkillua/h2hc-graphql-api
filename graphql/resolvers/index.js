const Counts = require('./counts')
const DailyStats = require('./dailyStats')

const resolvers = {
  ...Counts,
  ...DailyStats
}

module.exports = resolvers