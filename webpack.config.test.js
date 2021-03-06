var webpack = require("webpack");
var path = require("path");
var bower_dir = __dirname + '/bower_components';
var resolveBowerPath = function(componentPath) {
    return path.join(bower_dir, componentPath);
};
module.exports = {
  entry: './src/app.coffee',
  target: 'node',
  output: {
    path: './build',
    filename: 'bundle.test.js'
  },
  module: {
    noParse: [
      resolveBowerPath('/react/react-with-addons.js'),
      resolveBowerPath('/flux/dist/Flux.js'),
      resolveBowerPath('/underscore/underscore-min.js'),
      resolveBowerPath('/jquery/jquery.min.js'),
      resolveBowerPath('/moment/min/moment.min.js')
    ],
    loaders: [
      { test: /\.coffee$/, loader: "coffee-jsx-loader" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      underscore: 'underscore',
      jquery: 'jquery',
      Backbone: 'backbone',
      React: 'react',
      Flux: 'flux'
    })
  ],
  resolve: {
    alias: {
      'jquery': resolveBowerPath('/jquery/dist/jquery.min.js'),
      'backbone': resolveBowerPath('/backbone/backbone.js'),
      'react': resolveBowerPath('/react/react-with-addons.js'),
      'flux': resolveBowerPath('/flux/dist/Flux.js'),
      'underscore': resolveBowerPath('/underscore/underscore-min.js'),
      'moment': resolveBowerPath('/moment/min/moment.min.js')
    },
    extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
  }
};
