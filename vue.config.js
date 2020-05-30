module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assts',
    productionSourceMap: false,
    devServer: {
        port: 80,
        host: '0.0.0.0',
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://47.98.34.221:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
};
