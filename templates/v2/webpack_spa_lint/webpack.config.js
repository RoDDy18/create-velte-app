const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = path.resolve(__dirname, 'dist');
const loader = require('file-loader');

let htmlPageNames = []; // put your html file names here {name, path}(object array)
let multipleHtmlPlugins = htmlPageNames.map((name, path) => {
  return new HtmlWebpackPlugin({
    template: `./${path}.html`,
    chunks: [`${name}`],
    inject: 'body',
  })
});

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve(__dirname, './src/App.jsx'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3030,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: buildPath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(gif|png|jpe?g|ico)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'assets/images/'
                        }
                    }
                ]
            },
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test:/\.s[ac]ss$/i,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './public/favicon.png', // path to your favicon
            chunks:['index'],
            inject: 'body'
        })
    ].concat(multipleHtmlPlugins)
};
