module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      allowImportExportEverywhere: false,
    },
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      worker: true,
    },
    "extends": "airbnb-base",
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'linebreak-style': ['error', 'windows'],
      'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    },
};
