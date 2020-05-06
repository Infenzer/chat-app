const express = require('express')
const webpack = require('webpack')

const app = express()

app.use(require('connect-history-api-fallback')())
webpackDevMiddleware()

app.listen(3000, () => {
  console.log('Server started...')
})

function webpackDevMiddleware() {
  const webpackConfig = require('./webpack.config.dev.js')
  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require("webpack-hot-middleware")(compiler))
}