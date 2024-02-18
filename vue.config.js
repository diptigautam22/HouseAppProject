const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
  proxy: 'https://api.intern.d-tt.nl/api/houses',
  },
  base: "\HomeAppProject",
});
