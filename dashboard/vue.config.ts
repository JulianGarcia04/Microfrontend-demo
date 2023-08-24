import { name } from './package.json';

module.exports = {
  publicPath: '/vueapp',
  chainWebpack: (config: { resolve: { symlinks: (arg0: boolean) => any } }) =>
    config.resolve.symlinks(false),
  configureWebpack: {
    PluginArray: [],
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
