var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            //use: ['style-loader', 'css-loader'],
            use: ExtractTextPlugin.extract({
                use: ['style-loader', 'css-loader']
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.svg/,
            loader: 'svg-url-loader'
        }, {
            test: /\.(woff2?|eot|ttf|otf)$/,
            loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
        }]
    },
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: true,
        inline: true,
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
        new ExtractTextPlugin('styles.css'),
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
