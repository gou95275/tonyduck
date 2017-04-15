var path = require('path');
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: {
        app: './src/index.js'
    },
    resolve: {
        alias: {
            '@': resolve('src/template'),
            resetcss$: resolve('src/static/css/reset.css'),
            commoncss$: resolve('src/static/css/common.css'),
            font$: resolve('src/static/font/fontello/css/fontello.css'),
        }
    },
    module: {
        rules: [{
            test: /\.html$/,
            //loader: "raw-loader",
            loader: ['raw-loader'],
            include: [
                resolve('src'),
            ]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                resolve('src'),
            ]
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: [
                resolve('src'),
            ]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'static/img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'static/fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
    ]
};
