// nodejs 中的path模块
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');     //识别vue的template模板
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //webpack4.0 废除了extract-text-webpack-plugin插件用法  采用mini-css-extract-plugin插件分离css



module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    // devtool: 'source-map',
    entry: {
        main:path.resolve(__dirname, '../src/main.js'),
        vendors:path.resolve(__dirname, '../src/vendors.js')   //优先打包
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        // path: path.resolve(__dirname, '../output/static'),
        // publicPath: 'static/',
        // filename: '[name].[hash].js',    //输出文件为名称+hash串
        // chunkFilename: '[id].[chunkhash].js'
        path:path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'    //vue别名，vue开头的插件均可直接通过import vue$ from 'vue$'引入
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/, 
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/       //ES6语法编译es5
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]  
    },

    plugins: [
        new VueLoaderPlugin(),   //vue-loader插件引用
    ]
}
