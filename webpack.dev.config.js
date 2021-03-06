const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');

let webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: 'development',
    // entry: ['@babel/polyfill', './src/index.js'],//为了corejs3,polyfill不再维护了
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].-[hash].js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            '@ant-design/icons/lib/dist$': path.resolve(
                __dirname,
                'utils/antdIcon.js'
            ),
        },
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName:
                                '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                    { loader: 'postcss-loader' },
                ],
                exclude: /node_modules/,
            },

            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                ],
                include: /node_modules/,
            },

            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName:
                                '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ],
                include: /node_modules/,
            },

            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader' },
            },
            // { test: /\.tsx?$/,  loaders: ['babel-loader', 'ts-loader']},
            /*新版不用这个ts-loader了,由babel进行处理*/
            { test: /\.tsx?$/, loaders: ['babel-loader'] },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        // contentBase: path.resolve(__dirname, "dist"),// 配置开发服务运行时的文件根目录
        host: 'localhost', // 开发服务器监听的主机地址
        compress: true, // 开发服务器是否启动gzip等压缩
        port: 8989, // 开发服务器监听的端口
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css', // filename代表的是没有异步加载的css和从node_modules里面分离出来的css那部分css, 简单来说就是初始打包成的那块css
            chunkFilename: 'css/chunk.[id].[contenthash].css', // chunkFilename代表的是从node_modules里面分离出来的css. 还有react-loadable异步加载的css
            // allChunks: true,
        }),
        // new CompressionWebpackPlugin()
    ],
};
