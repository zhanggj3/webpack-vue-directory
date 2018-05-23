const path = require('path');
const webpack = require('webpack');    //引入webpack包
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.js');
const proxyConfig = require('./proxyConfig.js');
const postcssConfig = require('./postcss.config.js'); //webpack4.0  css兼容性自动补齐的插件配置引入
const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动编译生成html模板

process.env.NODE_ENV = 'development';

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader',postcssConfig]
            },
            {
                test:/\.less$/,
                use: ['style-loader','css-loader',postcssConfig,'less-loader']
            }
        ]  
    },
    devServer: {
        contentBase: false,
        port:8000,
        compress: true,
        host:'localhost',
        overlay:{
            errors:true,
        },
        open:true,
        historyApiFallback: true,//不跳转
        proxy: proxyConfig.proxy,
        inline: true,
        hot:true
    },
    plugins: [
        new HtmlWebpackPlugin({    //html模板工具插件应用
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})

module.exports = devWebpackConfig;