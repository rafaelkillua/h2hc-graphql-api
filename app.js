const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = process.env.PORT
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cors())
app.disable('x-powered-by')
app.enable('trust proxy')

require('./services/MongoDBService')

require('./graphql/index')(app)

let appStatus = false

try {
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
    appStatus = true
  })
} catch (err) {
  appStatus = false
}

module.exports = appStatus
