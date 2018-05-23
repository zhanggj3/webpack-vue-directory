const path = require('path');
const webpack = require('webpack');    //引入webpack包
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const postcssConfig = require('./postcss.config.js'); //webpack4.0  css兼容性自动补齐的插件配置引入
const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动编译生成html模板
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //webpack4.0 废除了extract-text-webpack-plugin插件用法  采用mini-css-extract-plugin插件分离css
const CleanWebpackPlugin = require('clean-webpack-plugin');  //清空目录



const prodWebpackConfig = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output'),
        publicPath: './',
        filename: '[name].[hash].js',    //输出文件为名称+hash串
        // chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader',postcssConfig]           //vue模板css分离
            },
            {
                test:/\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader',postcssConfig,'less-loader']       //vue  less.css分离
            }
        ]  
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",    //分离出来的css名称+hash
            chunkFilename: "[id].[hash].css"
        }),
        new HtmlWebpackPlugin({    //html模板工具插件应用
            filename: './index.html',
            template: path.resolve(__dirname, '../index.html'),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin('./output',{      //匹配删除的文件
                root: path.resolve(__dirname, '../'),      //根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )
    ]
})

module.exports = prodWebpackConfig;