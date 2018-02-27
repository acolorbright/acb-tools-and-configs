module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-acb-base',
    './rules/control-statements',
    './rules/react',
    './rules/react-a11y',
    './rules/style',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
