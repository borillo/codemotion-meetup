module.exports = {
    entry: './app',
    output: {
        path: '.',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'jsx'
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
}
