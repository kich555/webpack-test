const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000, // default is 8080
        open: true, // open browser on start
        hot: true, // hot module replacement
        compress: true, // enable gzip compression
        historyApiFallback: true, // fallback to index.html for SPA routing
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            filename:'index.html',
            template: 'src/template.html',
        })
    ]
}