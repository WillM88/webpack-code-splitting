import base, { PostCSS, CSSLoaderConfig } from './webpack.base.config.babel';

export default Object.assign(base, {
  devServer: {
    overlay: true,
    port: 3000,
  },
  output: Object.assign(base.output, {
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  }),
  devtool: 'eval-source-map',
  module: {
    rules: base.module.rules.concat([
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        }, CSSLoaderConfig(), PostCSS, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        }, CSSLoaderConfig(), PostCSS],
      },
    ]),
  },
});
