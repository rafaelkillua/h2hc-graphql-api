const Counts = require('../../models/Counts')

const perPage = 10

const list = async ({ page }) => {
  return (await Counts.find().limit(perPage).skip(perPage * ((page - 1) || 0)))
}

module.exports = {
  countsList: list
}