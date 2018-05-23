process.env.NODE_ENV = 'production'

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.config.js');


const spinner = ora('building for production...')
spinner.start();

//主(入口)配置文件   node执行命令=====> node node-main.js product
const main = require("../config/node-config.js");  //引入匹配模块
const gol= main.getpath;  //获取匹配模块暴露出来的getpath
const pathType = main.path;  //获取匹配模块暴露出来的pathType
const file_dirname = '/src/front-config.js'; //该项目全局配置参数文件所在相对路径

let fs= require('fs'); 
let number = /^[0-9]*$/;  //数值正则校验
let getParam = gol;
console.log(gol);
let conbinParam = "module.exports = "+JSON.stringify(gol);

fs.open(path.resolve(__dirname,"../")+file_dirname, 'w', function (err, fd) {   //fs nodejs打开文件   'w':- write写入模式，根据偏移量替换覆盖  'a':追加模式
    if(err) {
        console.error(err);
        return;
    } else {
      var buffer = new Buffer(conbinParam);   //定义buffer对象 与String类似对等的全局构造函数Buffe Buffer则node中储存二进制数据的中介者
      //fs.write(fd, buffer, offset, length, position, callback);

    /**
     * fd, 使用fs.open打开成功后返回的文件描述符
     * buffer, 一个Buffer对象，v8引擎分配的一段内存
     * offset, 整数，从缓存区中读取时的初始位置，以字节为单位
     * length, 整数，从缓存区中读取数据的字节数
     * position, 整数，写入文件初始位置；
     * callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象*/
    
      fs.write(fd, buffer, 0, buffer.length, 0, function (err, written, buffer) {
          if(err) {
            console.log('写入文件失败');
            console.error(err);
            return;
          }else{
            console.log('写入文件成功');
          }
      });
    }
});

rm(path.resolve(__dirname, '../output/static'), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop();
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})



