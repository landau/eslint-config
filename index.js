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
    'no-unused-vars': 'error',
    'prefer-destructuring': 'error',
    'prettier/prettier': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false
      }
    ],
    'sort-vars': ['error', { ignoreCase: true }]
  }
};
