module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react'],
  rules: {
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'react/no-unescaped-entities': 'off',
    'no-empty': 'off',
    'no-extra-semi': 'warn',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
