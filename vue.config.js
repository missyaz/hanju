module.exports = {
    chainWebpack:config=>{
        //处理.cur文件
        config.module
            .rule('url-loader')
            .test(/\.(cur)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .end()
    },
    //跨域代理
    devServer:{
        proxy:{
            "/daily/bing/image":{
                target:"http://cn.bing.com",
                changeOrigin: true,
                pathRewrite:{'^/daily/bing/image':'/HPImageArchive.aspx'}
            },
            "/daily/eyes/video":{
                target:"https://baobab.kaiyanapp.com",
                changeOrigin: true,
                pathRewrite:{'^/daily/eyes/video':'/api/v4/tabs/selected'}
            },
            "/daily/teleplay":{
                target:"http://10.147.17.85:8774",
                changeOrigin: true,
                pathRewrite:{'^/daily/teleplay':''}
            }
        }
    }
}