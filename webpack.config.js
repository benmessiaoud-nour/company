const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/js/index.js',


    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',

    },


    module: {

        rules: [

            {

                test: /\.(sass|css|scss)$/,

                use: [

                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    "css-loader",

                    "sass-loader",

                ],

            },
            {

                test: /\.(png|jpe?g|gif)$/i,

                use: [

                    {

                        loader: 'file-loader',

                        options: {

                            name: '[name].[ext]',

                            outputPath: "images",

                        }

                    },

                ],

            },

            {

                test: /\.(svg|eot|woff|woff2|ttf)$/,

                use: [

                    {

                        loader: 'file-loader',

                        options: {

                            name: '[name].[ext]',

                            outputPath: "fonts",

                        }

                    },

                ],

            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
        ],
    },
    devServer: {

        contentBase: path.join(__dirname, 'build'),

        // compress: true,

        port: 9000,

        writeToDisk: true,

        stats: 'errors-only',

        open: true

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/projects.html",
            filename: "projects.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/projectDetaills.html",
            filename: "projectDetaills.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/blog.html",
            filename: "blog.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/blog-detaills.html",
            filename: "blog-detaills.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/add-blog.html",
            filename: "add-blog.html",
        }),
        new MiniCssExtractPlugin()
    ],
};