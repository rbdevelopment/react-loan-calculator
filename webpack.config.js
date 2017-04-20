const path = require('path');
module.exports = {
  entry: ['./src/start.jsx','./src/sass/app.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'source-map'
};