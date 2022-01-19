module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://localhost:3000/',
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/assets/styles/variables.scss";
        `
      }
    }
  }
}
