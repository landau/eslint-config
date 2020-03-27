const airbnbBase = require('eslint-config-airbnb-base/rules/style');

module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'consistent-this': ['error', '_this'],
    complexity: ['warn', 11],
    curly: 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'function-paren-newline': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': airbnbBase.rules['no-restricted-syntax'].filter(
      (bit) => bit.selector !== 'ForOfStatement'
    ),
    'no-unused-vars': 'error',
    'prefer-destructuring': 'error',
    'prettier/prettier': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    strict: 'off',
    'sort-vars': ['error', { ignoreCase: true }],
  },
};
