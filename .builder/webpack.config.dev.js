var path = require('path');
var webpackConfig = require('../webpack.config.js');
var serverLocation = `//${process.env.SERVER_LOCALE}/${process.env.npm_package_name}/latest/`;
let rules = [
  webpackConfig.module.rules[0],
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [
            require('postcss-font'),
            require('postcss-import'),
            require('autoprefixer')
          ]
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      },
    ],
  },
  {
    test: /\.(svg|woff|woff2|eot|ttf)$/,
    use: 'url-loader?name=assets/[name].[ext]'
  },
  {
    test: /\.(png|jpg|jpeg)$/,
    use: 'file-loader?name=assets/[name].[ext]'
  }
];
webpackConfig.module.rules = rules;
webpackConfig.output.publicPath = serverLocation;
webpackConfig.devServer = {
  quiet: false,
  historyApiFallback: {
    index: 'index.html'
  }
};

module.exports = webpackConfig;
