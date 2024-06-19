const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',
  context: __dirname + '/src',
  watch: true,
  entry: {
    lib: './common/js/lib/lib.js'
  },
  output: {
    filename: 'common/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    loose: true
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, './common/js/lib/utils')
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      utils: 'utils',
      smoothscroll: 'smoothscroll'
    })
  ]
};
