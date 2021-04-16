module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: { 'react/no-unescaped-entities': 0 },
}
