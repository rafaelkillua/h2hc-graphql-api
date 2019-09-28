const { buildSchema } = require('graphql')
const { types: typesCounts, queries: queriesCounts, mutations: mutationsCounts } = require('./Counts')

const schema = buildSchema(`
  ${typesCounts}

  type Query {
    ${queriesCounts}
  }

  type Mutation {
    ${mutationsCounts}
  }
`)

module.exports = schema