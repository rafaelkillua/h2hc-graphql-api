const Counts = require('../../models/Counts')

const list = async ({ id }, { token }) => {
  const user = await User.findById(id)
  return user
}

module.exports = {
  counts: list
}