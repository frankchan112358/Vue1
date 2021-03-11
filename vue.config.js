
const BASE_URL = process.env.NODE_ENV === 'prod' ? '/vuejs_demo/' : '/vuejs_demo/'

console.log('process.env.NODE_ENV:' + process.env.NODE_ENV)

module.exports = {
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.output.chunkFilename('js/[name].[hash:8].js')
    config.output.filename('js/[name].[hash:8].js')
  }

}
