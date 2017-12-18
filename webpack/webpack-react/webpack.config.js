module.exports = {
    entry: './app',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'jsx-loader'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}
