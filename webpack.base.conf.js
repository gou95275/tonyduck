var path = require('path');
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: {
        app: './src/index.js'
    },
    /*output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].[chunkhash].js',
        publicPath: '/'
    },*/
    resolve: {
        alias: {
            resetcss$: resolve('src/lib/css/reset.css'),
            commoncss$: resolve('src/lib/css/common.css'),
            font$: resolve('src/lib/font/fontello/css/fontello.css'),
        }
    },
    module: {
        rules: [{
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
