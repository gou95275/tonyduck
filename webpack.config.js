var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, "src")
            ]
        }, {
            test: /\.css$/,
            //loader: 'css-loader'
            use: ['style-loader', 'css-loader'],
            /*use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            }),*/
            include: [
                path.resolve(__dirname, "lib/css")
            ]
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
        //new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()

    ],
    resolve: {
        alias: {
            resetcss$: path.resolve(__dirname, 'lib/css/reset.css'),
            commoncss$: path.resolve(__dirname, 'lib/css/common.css')
        }
    },
    devServer: {
        //contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        /*在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html*/
        historyApiFallback: true,
        hot: true,
        inline: true,
        noInfo: true
    },
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
