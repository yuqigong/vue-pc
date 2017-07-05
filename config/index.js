/**
 * Created by gongyuqi on 2017/5/18.
 */
import path from 'path'
import devEnv from './dev.env'
import prdEnv from './prod.env'
import preEnv from './pre.env'

export default {
    build: {
        prdEnv: prdEnv,
        preEnv: preEnv,
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '',
        productionSourceMap: false
    },
    dev: {
        env: devEnv,
        port: 8081,
        autoOpenBrowser: true,
        assetsPublicPath: '',
        proxyTable: [{
            path: '/**',
            target: 'http://10.139.56.178:8080',
            host: '10.139.56.178:8080',
            changeOrigin: true
        }]
    }
}
