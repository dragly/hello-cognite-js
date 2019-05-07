const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devServer: {
        compress: true,
        contentBase: [path.resolve(__dirname, 'public')],
        stats: 'minimal',
        host: 'localhost',
        https: true,
        open: false,
        overlay: {
            warnings: false, // reports errors in browser window
            errors: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    mode: 'development'
};
