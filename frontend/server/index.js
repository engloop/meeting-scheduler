const express = require('express');
const proxy = require('express-http-proxy')
const url = require('url')
const addDevMiddlewares = require('./addDevMiddlewares')

const webpackConfig = require('../webpack.config')
const logger = require('./logger')
const app = express()


// get the intended host and port number, use localhost and port 8888 if not provided
const customHost = process.env.HOST
const host = customHost || null // Let http.Server use its default IPv6/4 host
const frontendHost = customHost || 'localhost'
const frontendPort = process.env.PORT || 8888

const backendPort = process.env.API_PORT || 5000
const backendHost = process.env.API_HOST || frontendHost


app.use(/^\/api|auth\//, proxy(`http://${backendHost}:${backendPort}`, {
    proxyReqPathResolver: (req) => req.baseUrl + req.url,
}))

addDevMiddlewares(app, webpackConfig)


// Start your app.
app.listen(frontendPort, host, (err) => {
  if (err) {
    return logger.error(err.message)
  }

    logger.appStarted(frontendHost, frontendPort, backendHost, backendPort)
})