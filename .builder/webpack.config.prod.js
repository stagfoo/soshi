const path = require('path');
const webpackConfig = require('../webpack.config.js');
const webpack = require('webpack');

const ClosureCompiler = require('google-closure-compiler-js').webpack;
const cdnLocation = path.resolve('../surge-dist');
const serverLocation = process.env.SERVER_LOCALE;
const version = process.env.LATEST ? 'latest' : process.env.npm_package_version;
const publicPath = `//${serverLocation}/${process.env.npm_package_name}/${version}/`;
const buildPath = `${cdnLocation}/${serverLocation}/${process.env.npm_package_name}/${version}`;

const plugins = [
  new ClosureCompiler({
    options: {
      languageIn: 'ECMASCRIPT6',
      languageOut: 'ECMASCRIPT3',
      compilationLevel: 'SIMPLE_OPTIMIZATIONS',
      warningLevel: 'QUIET',
      outputWrapper: '(function(){\n %output% \n}).call(this);'
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
];

webpackConfig.output.path = buildPath;
// webpackConfig.output.publicPath = publicPath;

webpackConfig.plugins = plugins;
module.exports = webpackConfig;
