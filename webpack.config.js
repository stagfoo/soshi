/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * i
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const webpack = require('webpack');
// VARIABLES
const version = process.env.npm_package_version;
const versionChunk = `v${version}`;
// OUTPUT SETTINGS
const outputConfig = {
    path: path.resolve('build'),
    filename: `app.js?${versionChunk}`,
    chunkFilename: `app_[name].js?${versionChunk}`,
    jsonpFunction: `$app_[name]_${versionChunk}_loader`,
};
// PLUGINS
const plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    ENV_TYPE: JSON.stringify(process.env.ENV_TYPE),
  }),
];

// RULES
const rules = [
  {
    test: /\.jsx?$/,
    exclude: [/node_modules/],
    use: ['babel-loader'],
  },

  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: false,
        },
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
          plugins: [require('postcss-font'), require('postcss-import'), require('autoprefixer'), require('cssnano')],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
        },
      },
    ],
  },
  {
    test: /\.(svg|woff|woff2|eot|ttf)$/,
    use: 'url-loader?name=assets/[name].[ext]',
  },
  {
    test: /\.(png|jpg|jpeg)$/,
    use: 'file-loader?name=:wassets/[name].[ext]',
  },
];


// Webpack Export
module.exports = {
  entry: ['./src/render'],
  cache: true,
  output: outputConfig, 
    resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('domain'),
      path.resolve('components'),
      path.resolve('src'),
      path.resolve('fonts'),
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.sass'],
  },
  plugins,
  module: {
    rules,
  }, };
