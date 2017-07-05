/**
 * Created by gongyuqi on 2017/6/23.
 */
import webpack from 'webpack'
import devConfig from './webpack.dev.config'
import prdConfig from './webpack.prod.config'
import config from '../config'
import WebpackDevServer from 'webpack-dev-server'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'

const port = config.dev.port;

if (config.dev.autoOpenBrowser) {
    devConfig.plugins.push(
        new OpenBrowserPlugin({url: 'http://localhost:' + port})
    );
}

if (process.env.NODE_ENV === 'development') {

    new WebpackDevServer(webpack(devConfig), {
        publicPath: devConfig.output.publicPath,
        historyApiFallback: true,
        noInfo: true,
        hot: true,
        inline: true,
        // contentBase: './',
        port: port,
        stats: {
            colors: true
        },
        proxy: config.dev.proxyTable
    }).listen(port, '0.0.0.0', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Listening at PORT:' + port);
    });

} else {

    webpack(prdConfig, () => {
        console.log('## 代码编译完成');
    })

}
