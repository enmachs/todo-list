const path = require('path');

module.exports = {
  // JavaScript entry point
  entry: {
    'app': path.resolve(__dirname, 'app/entries/app.js'),
  },
  // JavaScrip bundle file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  // Setup server
  devServer: {
    inline: true,
    port: 9000
  },
  devtool: 'eval-source-map',
  module: {
    // JS, JSX and SASS loaders
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
};
