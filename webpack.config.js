const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');//Optimize
module.exports= {
    entry: {
        'app': './src/index.js',
        'assets/js/banner': './src/Assets/js/banner.js'
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, "/app"),
        filename: '[name].js',
    },
    devServer: {
        contentBase: path.join(__dirname, "/app"),
        port:8080,
        writeToDisk: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "Assets/fonts",
                        }
                    }
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new CssMinimizerWebpackPlugin({}),
        new MiniCssExtractPlugin({
            filename:'./Assets/css/style.css',
        }),
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/button.html',
            template: './src/Components/button.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/textfield.html',
            template: './src/Components/textfield.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/card.html',
            template: './src/Components/card.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/banner.html',
            template: './src/Components/banner.html',
            chunks: ['app','assets/js/banner']
        }),
    ],
}