module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '17'
    }
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-multi-comp': 'error'
  },
  overrides: []
}
