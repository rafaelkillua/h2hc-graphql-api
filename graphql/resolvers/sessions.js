const Session = require('../../models/Session')

const defaultPerPage = 10

const sessions = async ({ page, perPage }) => {
  let list
  if (perPage === -1) {
    list = await Session.find().populate('hpfeed_id')
  } else {
    list = await Session.find().limit(perPage || defaultPerPage).skip((perPage || defaultPerPage) * ((page - 1) || 0)).populate('hpfeed_id')
  }
  
  list.forEach(value => {
    value.timestampString = value.timestamp.toString()
  })
  return list
}

module.exports = {
  sessions
}