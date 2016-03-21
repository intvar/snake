const join = require('path').join;
module.exports = {
  entry:'./index.js',
  output:{
    path:join(__dirname, '/dist'), 
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer:{
    contentBase:join(__dirname, './dist')
  }
};