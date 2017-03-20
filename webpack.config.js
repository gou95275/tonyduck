var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: '/\.js$/',
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, "src")
            ]
        }, {
            test: '/\.css$/',
            use: ['style-loader','css-loader'],
        }]
    },
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: true,
        noInfo: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: true,
    },
    target: "web",
    context: __dirname,
    devtool: "eval-source-map",
};
