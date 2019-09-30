const Counts = require('../../models/Counts')

const defaultPerPage = 10

const counts = async ({ page, perPage }) => {
  if (perPage === -1) {
    return await Counts.find()
  } else {
    return await Counts.find().limit(perPage || defaultPerPage).skip((perPage || defaultPerPage) * ((page - 1) || 0))
  }
}

module.exports = {
  counts
}