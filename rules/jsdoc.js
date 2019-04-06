module.exports = {
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/check-types': 'error',
    'jsdoc/newline-after-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-returns-type': 'error'
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        augments: 'extends',
        return: 'returns'
      }
    }
  }
};
