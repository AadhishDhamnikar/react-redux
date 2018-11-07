
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

var config = {
    "devtool": "cheap-eval-source-map",
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings:false
        //     }
        // })
    ],
    module: {
        // rules: [
        //     // {
        //     // test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        //     // use: "file?name=img/[name].[ext]"
        //     // }
        // ],
        loaders: [
            
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                loader: 'url-loader'
            },
        ]
    },
    devServer: {
        contentBase: './dist'
    }
};

module.exports = config;