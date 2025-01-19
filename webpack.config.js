const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env.mode ?? 'production',
        entry: path.resolve(__dirname, 'src' , 'index.js'),
        output: {
          filename: '[name].js',
          path: path.resolve(__dirname, 'build'),
          clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },    
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"],
        },
        plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src' ,'index.html'),
        })
    ],
    }
};