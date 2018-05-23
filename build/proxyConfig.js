module.exports = {
    proxy: {
        '/api': {
            target: 'http://qianmao.ldcc.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'  //需要rewrite的,
            }
        }
    }
}

