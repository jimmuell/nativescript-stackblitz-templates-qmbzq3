const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  return webpack.resolveConfig();

  resolve: {
    conditionNames: ['svelte'];
  }
};
