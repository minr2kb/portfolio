module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'airbnb',
    'eslint-config-prettier',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'global-require': 'off',
    'lines-between-class-members': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['draft', 'e'],
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
