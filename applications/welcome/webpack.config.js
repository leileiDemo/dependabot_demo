const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'liveramp',
    projectName: 'harness-welcome',
    webpackConfigEnv,
    orgPackagesAsExternal: false,
    argv
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8084
    },
    externals: {
      react: 'react-18',
      'react-dom': 'react-dom-18',
      'single-spa': 'single-spa',
      '@emotion/react': '@emotion/react-18',
      '@emotion/styled': '@emotion/styled-18'
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
