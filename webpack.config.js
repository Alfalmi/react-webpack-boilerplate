const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port: 4000
    },

    module: {
        rules: []
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}