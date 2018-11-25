const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = env => {

  console.info('NODE_ENV', env.NODE_ENV)

  console.info('Production', env.production)

  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    }
  })
}