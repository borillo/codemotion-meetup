module.exports = {
   entry: './app.js',
   output: {
      path: '.',
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         { test: /\.scss$/, loader: 'style!css!sass' }
      ]
   }
}
