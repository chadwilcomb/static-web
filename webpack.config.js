require('babel/register');
var getConfig = require('hjs-webpack');

var config = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  hostname: 'piq-chad.local',
  html: function (context) {
    return {
      '200.html': context.defaultTemplate(),
      'index.html': context.defaultTemplate()
    }
  }
})

module.exports = config
