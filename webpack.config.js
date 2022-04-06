const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');//Optimize
module.exports= {
    entry: {
        'app': './src/index.js',
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, "/app"),
        filename: 'app.js',
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
        }),
    ],
}