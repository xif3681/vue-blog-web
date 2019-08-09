module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    // baseUrl: '/',
    devServer: {
        proxy: {
            '/articles': {
                target: 'http://notapig.cn/blog-api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/articles': ''
                }
            },
            "/blog-api": {
                "target": "http://notapig.cn/blog-api",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/blog-api': ''
                }
            }
        }
    }
}
// .env.development
// VUE_APP_BASE_API = /api