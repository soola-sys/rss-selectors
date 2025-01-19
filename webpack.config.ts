import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

interface IEnv {
    mode: 'production' | 'development'
}

export default (env : IEnv) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'production',
        entry: path.resolve(__dirname, 'src' , 'index.ts'),
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
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src' ,'index.html'),
        })
    ],
    }
    return config
}
