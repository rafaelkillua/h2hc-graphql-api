const { buildSchema } = require('graphql')
const { types: typesUser, queries: queriesUser, mutations: mutationsUser } = require('./user')

const schema = buildSchema(`
  ${typesUser}
  type Query {
    ${queriesUser}
  }
  type Mutation {
    ${mutationsUser}
  }
`)

module.exports = schema