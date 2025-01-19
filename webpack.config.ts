import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import EslintPlugin from 'eslint-webpack-plugin';

interface IEnv {
  mode: 'production' | 'development';
}

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export default (env: IEnv) => {
  const config: Configuration = {
    mode: env.mode ?? 'production',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
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
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, './build'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        favicon: './src/components/view/img/css-icon.png',
      }),
      new EslintPlugin({ extensions: ['ts'] }),
    ],
  };
  return config;
};
