const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true, // clean the dist folder before each build
    },
    devtool:'source-map', // enable source maps for debugging webpack's output. https://webpack.js.org/configuration/devtool/  module: {
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
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader', //  2. Turns css into commonjs
                    'sass-loader', // 1. Turns sass into css
                ],
            },
            {
                test: /\.js$/, // check for all js files
                exclude: /node_modules/, // exclude node_modules folder
                use: {
                    loader: 'babel-loader', // use babel-loader for js files
                    options: {
                        presets: ['@babel/preset-env'], // use @babel/preset-env for env setup
                    }
                }
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