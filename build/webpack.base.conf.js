const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {

    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            loader: 'babel-loader',
            exclude: '/node-modules/',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    "@babel/plugin-transform-react-jsx",
                    "@babel/plugin-proposal-class-properties"
                ]
            }
            },
            {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
                }
            },
            {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: `${PATHS.src}/js/postcss.config.js`
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                },        
            ]
            },
            {
            test: /\.css$/,
            use: [                
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: `${PATHS.src}/js/postcss.config.js`
                        }
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: `${PATHS.assets}css/[name].css`
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/test.html`,
            filename: './test.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/animejs.html`,
            filename: './animejs.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/react-test.html`,
            filename: './react-test.html'
        }),
        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/img`,
                to: `${PATHS.assets}img`
            },
            {
                from: `${PATHS.src}/static`,
                to: ''
            }
        ])
      ]
}