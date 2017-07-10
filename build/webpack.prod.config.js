/**
 * Created by gongyuqi on 2017/6/23.
 */
import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConf from './webpack.base.config'
import config from '../config'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const isProd = process.env.NODE_ENV === 'production';

export default merge(baseConf, {
    entry: {
        index: './src/main/index.js',
        vendor: ['vue', 'vue-router', 'element-ui', 'babel-polyfill']
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: '[name].[hash:8].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': isProd ? config.build.prdEnv : config.build.preEnv,
            '__MOCK__': process.env.MOCK
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve('./'),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/main/template.html',
            favicon: 'favicon.ico',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: config.build.productionSourceMap,
            comments: false,
            compress: {
                warnings: false,
                join_vars: true,
                dead_code: true,
                hoist_funs: true,
                hoist_vars: false,
                drop_console: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash:8].js',
            minChunks: function (module) {
                return (
                    /node_modules/.test(module.context) &&
                    !/\.css$/.test(module.request)
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new ExtractTextPlugin('style.[contenthash:8].css')
    ]
})
