/**
 * Created by gongyuqi on 2017/6/23.
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const isProd = process.env.NODE_ENV !== 'development';

const base = {
    // cheap-module-eval-source-map is faster for development cheap-source-map
    devtool: isProd
        ? false
        : '#cheap-source-map',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: isProd,
                preserveWhitespace: false,
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 3 versions']
                    })
                ]
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/,
            use: isProd
                ? ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
                : ['style-loader', 'css-loader', 'autoprefixer-loader']
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
            }],
        }, {
            test: /\.less/,
            exclude: /node_modules/,
            use: isProd
                ? ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'less-loader', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
                : ['style-loader', 'css-loader', 'less-loader', 'autoprefixer-loader']
        }, {
            test: /\.(scss|sass)$/,
            exclude: /node_modules/,
            use: isProd
                ? ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'sass-loader', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
                : ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader']
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'url-loader?limit=1024&name=[hash:8].[name].[ext]'
        }, {
            test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'url-loader?limit=10000&name=[hash:8].[name].[ext]'
            }
        }]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? 'warning' : false
    }
};

export default base
