module.exports = {
   entry: './app.js',
   output: {
      path: '.',
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         { 
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
         }
      ]
   }
}
