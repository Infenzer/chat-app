const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: true,
        reloadAll: true
      },
    },
    'css-loader'
  ]

  if (extra){
    loaders.push(extra)
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'client', 'src'),
  mode: 'development',
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './index.tsx'
    ],
  },

  output: {
    filename: '[name].js', //'[name].[contenthash].js'
    path: path.resolve(__dirname, 'client', 'public'),
    publicPath: '/',
  },

  devtool: 'cheap-module-eval-source-map',

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      // minify: {
      //   collapseWhitespace: isProd
      // }
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      // minify: {
      //   collapseWhitespace: isProd
      // }
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssLoaders()
      }, 

      { 
        test: /\.(js|ts|tsx|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      {
        test: /\.(sass|scss)$/i,
        use: cssLoaders('sass-loader')
      }, 

      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ]
  }
}