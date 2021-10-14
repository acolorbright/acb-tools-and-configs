module.exports = {
  extends: [
    'stylelint-config-recommended',
    '@acolorbright/stylelint-config-property-sort-order',
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
    'at-rule-name-space-after': 'always',
    'at-rule-no-vendor-prefix': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'comment-whitespace-inside': 'always',
    'declaration-bang-space-before': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'function-comma-space-before': 'never',
    'function-comma-space-after': 'always',
    'function-parentheses-space-inside': 'never',
    'function-whitespace-after': 'always',
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-nesting-depth': 3,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-disallowed-list': ['max-width'],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-allowed-list': {
      'min-width': ['/^[0-9]+em$/'],
    },
    'media-feature-parentheses-space-inside': 'never',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-space-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'unit-case': 'lower',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never-single-line',
    'value-no-vendor-prefix': true,
  },
};
