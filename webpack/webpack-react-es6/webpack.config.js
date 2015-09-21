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
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};
