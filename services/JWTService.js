const jwt = require('jsonwebtoken')
const JWTKEY = process.env.JWTKEY
module.exports = {
  sign (user, expiresIn = null) {
    let timeToExpires = null
    if (expiresIn) timeToExpires = expiresIn
    else timeToExpires = 60 * 60 * 24 * 7
    return jwt.sign(user, JWTKEY, {expiresIn: timeToExpires})
  },
  verify (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JWTKEY, (err, decoded) => {
        if (err) reject(err)
        return resolve(decoded)
      })
    })
  }
}
