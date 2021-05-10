module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2020: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    '@acolorbright/eslint-config',
    'eslint-config-prettier/react',
    './rules/prettier',
    './rules/typescript',
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/style',
    './rules/import',
  ].map(require.resolve),
}
