const path = require('path');
const TerserPlugin = require('terser-webpack-plugin'); // for minification and it is available from webpack version 5
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // it will extract css into sep. file
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // it will clean up our dist folder before generting new file with hashed name
const HtmlWebpackPlugin  = require( 'html-webpack-plugin'); // it will update the html page with dynamic file name of css and js.

const outputDirectoryPath = path.resolve(__dirname, './dist');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: outputDirectoryPath,
        publicPath: ''
    },
    mode: 'none',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port:9000,
        static: {
            directory: outputDirectoryPath
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset', // assets/resource, asset/inline, asset, asset/source
                parser: {
                    dataUrlCondition : {
                        maxSize : 3 * 1024 // 3 Kilobite  or less file will be inlined
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
        ]
        
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
    ]

}