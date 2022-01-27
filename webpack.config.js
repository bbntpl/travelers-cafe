const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const yaml = require('yamljs');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        // header: {
        //     import: './src/components/header.js',
        //     filename: 'pages/[name].[hash].js'
        // },
        // footer: {
        //     import: './src/components/footer.js',
        //     filename: 'pages/[name].[hash].js'
        // },
        // headers: {
        //     import: './src/helpers/index.js',
        //     filename: 'pages/[name].[hash].js'
        // },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name].[hash][ext][query]`;
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
        ],
    }
}