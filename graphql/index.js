const graphqlHttp = require('express-graphql')
const rootValue = require('./resolvers/index')
const schema = require('./schemas/index')

module.exports = app => {
  app.use(
    '/graphql', 
    graphqlHttp(
      (req, res, graphqlParams) => ({
        schema,
        rootValue,
        graphiql: process.env.NODE_ENV === 'production' ? false : true,
        context: { token: req.headers.authorization }
      })
    )
  )
}