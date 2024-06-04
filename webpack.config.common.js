const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: 'assets/[name].[ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.png'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'public/images'),
                    to: path.resolve(__dirname, 'dist/assets/images')
                },
                {
                    from: path.resolve(__dirname, 'public/icons'),
                    to: path.resolve(__dirname, 'dist/assets/icons')
                },
                {
                    from: path.resolve(__dirname, 'public/sounds'),
                    to: path.resolve(__dirname, 'dist/assets/sounds')
                }
            ],
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')]
                        },
                    }
                }, 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/images/[name]-[hash][ext]'
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}


