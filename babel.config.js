module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: true },
      loose: true
      // debug: true,
      // exclude: ['es6.regexp.to-string', 'es6.number.constructor'],
    }],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
}