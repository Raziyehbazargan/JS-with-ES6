module.exports = {
  entry: './script/script.js',
  output: {filename: 'bundle.js'},
  module: {
    loaders: [
      { test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }
};
