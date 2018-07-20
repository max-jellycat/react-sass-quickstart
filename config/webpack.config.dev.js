/*
 * Package Import
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * Local Import
 */

/*
 * Webpack Configuration
 */
const config = {
  // Mode
  mode: 'development',

  // Entry
  entry: {
    app: [
      'react-hot-loader/patch',
      './app/styles/global.scss',
      './app/src/index.js',
    ],
  },

  // Output
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Electron React Quickstart',
      template: './app/assets/index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // HMR
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  // Devtool controls if and how sourcemaps are generated
  devtool: 'cheap-module-eval-source-map',

  // If we need to reload automagically during the dev
  watch: true,

  // Settings devServer.
  devServer: {
    // Enable gzip compression of generated files
    // compress: true,
    contentBase: path.resolve('./app/assets'),

    // Active HMR
    hot: true,

    // Display an overlay in your browser when you got an error
    overlay: true,
    port: 3000,

    // What do you need display in your console?
    // https://webpack.js.org/configuration/stats/#stats
    stats: {
      colors: true,
      errors: true,
      reasons: true,
      timings: true,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};

/*
 * Export
 */
module.exports = config;
