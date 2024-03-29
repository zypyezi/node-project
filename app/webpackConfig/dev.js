const path = require('path')
var webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./base')

const webpackConfig = {

    mode: 'development',
    devtool: 'inline-source-map',

    module:{
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ["style-loader", 'css-loader','sass-loader']
            }
        ]
    },
    plugins:[

    ],
    devServer: {
        disableHostCheck: true,
        port: 8082,
        host: '0.0.0.0',
        inline: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        contentBase: path.join(__dirname, './src'),
        proxy: {
            '/user':{
                target:"http://127.0.0.1:3001",
                changeOrigin:true
            }
        },
      }
}


module.exports =  webpackMerge(webpackBaseConfig, webpackConfig )