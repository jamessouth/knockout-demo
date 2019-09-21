const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ScriptExtHTMLWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  // mode: 'development',
  // devtool: 'inline-source-map',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: [
              [
                '@babel/preset-env',
                {
                  'useBuiltIns': 'usage',
                  'corejs': '3.1.3',
                },
              ],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [
      '**/*',
      '!demo1.min.js',
      '!demo2.min.js',
      '!demo3.min.js',
    ] }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    }),
    new HTMLWebpackPlugin({
      template: './src/html/index.html',
      title: 'Knockout Text Demo',
      filename: 'index.html',
    }),
    new ScriptExtHTMLWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, 'docs'),
    index: 'index.html',
  },
};
