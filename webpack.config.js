const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = {
  entry: './client/index',
  output: {
    path: path.resolve(__dirname, 'public/dist'), // the absolute path for the directory where we want the output to be placed
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.svg', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-3']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'babel-loader!svg-react-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          publicPath: 'assets/',
          outputPath: '../assets/'
        }
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ]
};
