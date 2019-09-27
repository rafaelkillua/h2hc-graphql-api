const User = require('../../models/User')
const BcryptService = require('../../services/BcryptService')
const userAuth = require('../policies/UserAuthenticate')
const JWTService = require('../../services/JWTService')

const user = async ({id}, {token}) => {
  try {
    await userAuth(token)
    const user = await User.findById(id)
    return user
  } catch (err) {
    return new Error(err)
  }
}

const users = async ({ page }, { token }) => {
  try {
    await userAuth(token)
    page = page - 1
    const users = await User.find().limit(10).skip(10 * page)
    return users
  } catch (err) {
    return new Error(err)
  }
}

const createUser = async ({ name, email, password }, { token }) => {
  try {
    const userFound = await User.findOne({ email })
    if (userFound) throw new Error('User already exists')
    password = await BcryptService.generateHash(password)
    const userCreated = await User.create({ name, email, password })
    return userCreated
  } catch (err) {
    return new Error(err)
  }
}

const signIn = async ({ email, password }) => {
  try {
    const userFound = await User.findOne({ email })
    if ( userFound ) {
      const passwordValid = BcryptService.compareHash(password, userFound.password)
      if ( passwordValid ) {
        const token = JWTService.sign(userFound.toJSON())
        return { user: userFound, token }
      } else throw new Error('Invalid credencials')
    } else throw new Error('Invalid credencials')
  } catch (err) {
    return new Error(err)
  }
}

module.exports = {
  signIn,
  users,
  user,
  createUser
}