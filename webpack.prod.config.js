const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require("path");
module.exports = {
    mode: "production",
    entry: {
        main:["@babel/polyfill", "./src/index.js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].-[contenthash].js",
        publicPath: "/" /*打包完成时当前目录下的，一般情况下publicPath应该以'/'结尾，而其他loader或插件的配置不要以'/'开头*/
    },
    resolve: {
        alias:{'@ant-design/icons/lib/dist$': path.resolve(__dirname, 'utils/antdIcon.js')},
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader,},
                    {
                        loader: "css-loader",
                        // options: {
                        //     modules: true,
                        //     localIdentName: "[path][name]__[local]--[hash:base64:5]",
                        //     sourceMap: true, /*因为打包后的文件都是被hash过和压缩过,所以当生产环境出问题了,可以方便的定位到原位置上*/
                        // }
                    },
                    {loader: "postcss-loader"}
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader,},
                    {loader: "css-loader",},
                ],
                include: /node_modules/,
            },

            {
                test: /\.less$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader,},
                    {
                        loader: "css-loader",
                        // options: {
                        //     modules: true,
                        //     localIdentName: "[path][name]__[local]--[hash:base64:5]",
                        //     sourceMap: true,
                        // }
                    },
                    {loader: "postcss-loader"},
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader,},
                    {loader: "css-loader",},
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                include: /node_modules/,
            },

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {loader: "babel-loader",}
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[hash].[ext]',// 可以在这里改为images/[hash].[ext]新建一个文件夹,这样就不需要outputPath: 'images/'了
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true, /*启用cpu加速打包速度*/
                sourceMap: true, // set to true if you want JS source maps/*帮助快速查找问题所在的地方*/
                exclude: /node_modules/
            }),
            new OptimizeCSSAssetsPlugin({})/*这个插件是用来压缩css代码的,和postcss里面的cssnano是一样的,都能去除注释, 这个比用cssnano好*/
        ],
        namedChunks: true,
        runtimeChunk: true,
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
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },

    plugins: [
        new CleanWebpackPlugin(),
        new LodashModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            // favicon:'./src/component/20180806050252871.ico',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",// filename代表的是没有异步加载的css和从node_modules里面分离出来的css那部分css, 简单来说就是初始打包成的那块css
            chunkFilename: "css/chunk.[id].[contenthash].css",// chunkFilename代表的是从node_modules里面分离出来的css. 还有react-loadable异步加载的css
            // allChunks: true,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new CompressionWebpackPlugin(),//这个插件是用来压缩代码的gz
        // new CompressionWebpackPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp('\\.(js|css)$'),
        //     threshold: 10240,
        //     minRatio: 0.8
        // })

        /*开启强大的的代码分析神器*/
        // new BundleAnalyzerPlugin(),

        /*workbox should always be last called*/
        new WorkboxWebpackPlugin.InjectManifest({
            swSrc: "./src/src-sw.js",
            swDest: "sw.js",
            importWorkboxFrom: 'local'// workbox的包路径,默认是cdn,由于cdn需要Google的服务,所以这里选择将包本地化,最好换成公司的cdn
        })
    ]
};
