const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    devtool: 'source-map',
    output: {
        publicPath: '/',
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './',
        inline: true,
        host: '0.0.0.0',
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    }
};