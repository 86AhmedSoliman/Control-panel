const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');//Optimize
module.exports= {
    entry: {
        'app': './src/index.js',
        'assets/js/banner': './src/Assets/js/banner.js',
        'assets/js/tabs': './src/Assets/js/tabs.js',
        'assets/js/upload': './src/Assets/js/upload.js',
        'assets/js/chart': './src/Assets/js/chart.js'
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
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "Assets/images",
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
        new HtmlWebPackPlugin({
            filename: 'Components/list.html',
            template: './src/Components/list.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/tabs.html',
            template: './src/Components/tabs.html',
            chunks: ['app','assets/js/tabs']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/upload.html',
            template: './src/Components/upload.html',
            chunks: ['app','assets/js/upload']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/help.html',
            template: './src/Components/help.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/summary.html',
            template: './src/Components/summary.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/actions.html',
            template: './src/Components/actions.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/sidebar.html',
            template: './src/Components/sidebar.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/table.html',
            template: './src/Components/table.html',
            chunks: ['app']
        }),
        new HtmlWebPackPlugin({
            filename: 'Components/chart.html',
            template: './src/Components/chart.html',
            chunks: ['app','assets/js/chart']
        }),
    ],
}