const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, `src/web.lib.ts`),
  output: {
    path: path.resolve(__dirname, `../../dist/sdk`),
    filename: `sdk.js`,
    library: 'ESdk',
    libraryTarget: 'var'
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
            loader: 'ts-loader',
            options: {
              configFile: `tsconfig.lib.json`
            }
        },
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  optimization: {

  },
  mode: 'production'
};
