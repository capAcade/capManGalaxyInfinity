const feConfig = require('./webpack.config.fe');
const path = require('path');

feConfig.watch = false;
feConfig.output.path = path.resolve(__dirname, 'docs');

module.exports = feConfig;
