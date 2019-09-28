const Counts = require('../../models/Counts')

const defaultPerPage = 10

const counts = async ({ page, perPage }) => {
  return (await Counts.find().limit(perPage || defaultPerPage).skip((perPage || defaultPerPage) * ((page - 1) || 0)))
}

module.exports = {
  counts
}