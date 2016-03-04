module.exports = {
  components: './src/button.js',
  updateWebpackConfig: function(webpackConfig, env) {
    webpackConfig.module.loaders.push(
      {
        test: /\.js$/,
        // Affect only your project’s files
        include: __dirname,
        // Babel loader will use your project’s .babelrc
        loader: 'babel'
      }
    );
    return webpackConfig;
  }
};
