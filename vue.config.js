const fs = require('fs')
const webpack = require('webpack');
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0
const vueVersion = JSON.parse(packageJson).dependencies.vue || 0
function getVueMainVersion(vueVersion) {
    const version = vueVersion.replace('^', '').split('.')
    return version[0]
}
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    PACKAGE_VERSION: '"' + version + '"',
                    VUE_VERSION_BASE: '"' + getVueMainVersion(vueVersion) + '"'
                }
            })
        ]
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://3a.alaatv.com',
                changeOrigin: true
            },
        }
    }
}
