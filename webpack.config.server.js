const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './src/ba/server.js',
  target: 'node',
  watch: NODE_ENV === 'development',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  },
  mode: 'development',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new NodemonPlugin(),
],
};