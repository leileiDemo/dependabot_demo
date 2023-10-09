const { mergeWithCustomize, customizeArray, customizeObject } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'liveramp',
    projectName: 'harness-nav',
    webpackConfigEnv,
    orgPackagesAsExternal: false,
    argv
  });
  return mergeWithCustomize({
    customizeArray: customizeArray({
      externals: 'replace'
    }),
    customizeObject: customizeObject({
      externals: 'replace'
    })
  })(defaultConfig, {
    devServer: {
      port: 8080
    },
    externals: [
      {
        react: 'react-18',
        'react-dom': 'react-dom-18',
        'single-spa': 'single-spa',
        '@emotion/react': '@emotion/react-18',
        '@emotion/styled': '@emotion/styled-18'
      }
    ]
  });
};
