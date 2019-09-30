const Hpfeed = require('../../models/Hpfeed')

const defaultPerPage = 10

const hpfeeds = async ({ page, perPage }) => {
  let list
  if (perPage === -1) {
    list = await Hpfeed.find()
  } else {
    list = await Hpfeed.find().limit(perPage || defaultPerPage).skip((perPage || defaultPerPage) * ((page - 1) || 0))
  }
  
  list.forEach(value => {
    value.timestampString = value.timestamp.toString()
  })
  return list
}

module.exports = {
  hpfeeds
}