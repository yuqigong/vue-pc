/**
 * Created by gongyuqi on 2017/6/23.
 */
import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base.config'
import config from '../config'
import HtmlwebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'

const port = process.env.PORT || 8080;

export default merge(baseConfig, {
    entry: [
        './src/main/index.js',
        'webpack-dev-server/client?http://0.0.0.0:' + port,
        'webpack/hot/dev-server'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: config.dev.assetsPublicPath,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
            '__MOCK__': process.env.MOCK
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: './src/main/template.html',
            favicon: 'favicon.ico',
            inject: true
        }),
        new LodashModuleReplacementPlugin({
            'collections': true,
            'paths': true,
            'flattening': true
        }),
        new FriendlyErrorsPlugin()
    ]
});
