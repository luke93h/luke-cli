const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
let WebpackDevServer = require('webpack-dev-server')
const path = require('path')
let hotMiddleWare = require('webpack-hot-middleware');
const webpackDevServer = require('webpack-dev-server');
var opn = require('opn');

const config = require('../config/webpack.dev.config.js');

const compiler = webpack(config);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const app = new WebpackDevServer(compiler, {
  disableHostCheck: true,
  compress: true,
  clientLogLevel: 'none',
  contentBase: path.resolve(__dirname, '../public'),
  hot: true,
  publicPath: config.output.publicPath,
  quiet: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  https: false,
});
app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr'
}))
/* app.get('/pages/:viewname?', function(req, res, next) {
  var viewname = req.params.viewname
  var filepath = path.join(compiler.outputPath, `${viewname}/index.html`);
  console.log(Object.keys(compiler.outputFileSystem.data['F:']['luke-work']['work']['ebaoDataV']['dist']))
  // 使用webpack提供的outputFileSystem
  compiler.outputFileSystem.readFile(filepath, function(err, result) {
    if (err) {
      // something error
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
}); */
// Serve the files on port 3000.
app.listen(3000, '0.0.0.0', function (err) {

  if (err) {
    return console.log(err);
  }
  console.log('Example app listening on port 3000!\n');
  opn('http://localhost:3000/tpa1', {app: 'chrome'});
});