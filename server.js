const express = require('express')
const webpack = require('webpack')

const app = express()

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