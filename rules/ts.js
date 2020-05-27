module.exports = {
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        sourceType: 'module',
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': ['error', { ts: 'never' }],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/naming-convention': 'error',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          { singleline: { delimiter: 'semi', requireLast: true } },
        ],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/triple-slash-reference': [
          'error',
          { path: 'never', types: 'never', lib: 'never' },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false },
        ],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        semi: 'off',
        '@typescript-eslint/semi': ['error'],
      },
    },
  ],
};
