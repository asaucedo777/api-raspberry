import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import config from './config.json'
import db from './db'
import middleware from './middleware'
import api from './api'

// Application and server
let app = express()
app.server = http.createServer(app)
// logger
app.use(morgan('dev'))
// 3rd party middleware
app.use(cors({
  exposedHeaders: config.corsHeaders
}))
// Parser
app.use(bodyParser.json({
  limit: config.bodyLimit
}))
// connect to db
db(db => {
  // internal middleware
  app.use(middleware({ config, db }))
  // api router
  app.use(config.prefix, api({ config, db }))
  // Listen on port
  app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`)
  })
})

export default app
