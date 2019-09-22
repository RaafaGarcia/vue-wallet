module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-wallet/'
    : '/',
  presets: [
    '@vue/app'
  ]
}
