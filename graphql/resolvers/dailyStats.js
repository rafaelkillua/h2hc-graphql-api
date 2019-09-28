const DailyStats = require('../../models/DailyStats')

const defaultPerPage = 10

const dailyStats = async ({ page, perPage }) => {
  const list =  await DailyStats.find().limit(perPage || defaultPerPage).skip((perPage || defaultPerPage) * ((page - 1) || 0))

  list.forEach(item => {
    if (item.hourly) {
      item.hourly = Object.entries(item.hourly).map(([key, value]) => ({ hour: key, value }))
    }
  })
  return list
}

module.exports = {
  dailyStats
}