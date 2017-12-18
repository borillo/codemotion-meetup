module.exports = {
    entry: './app',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                {
                    presets:['react']
                }
            }
        ]
    }
};
