const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.ts',
    'pages/index/index': './src/pages/index/index.ts',
    'pages/logs/logs': './src/pages/logs/logs.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'src'),
  }
}
