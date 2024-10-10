module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'no-restricted-globals': ['error', 'name', 'length'],
    'prefer-arrow-callback': 'error',
    quotes: ['error', 'double', { allowTemplateLiterals: true }],
    semi: 'off', // Turn off the rule for missing semicolons
    'comma-dangle': 'off' // Turn off trailing comma errors
  },
  overrides: [
    {
      files: ['functions/index.js'], // Target the specific file
      rules: {
        quotes: 'off', // Disable the quotes rule
        semi: 'off', // Disable semicolon requirement
        'no-unused-vars': 'off', // Disable unused vars rule
        'max-len': 'off' // Disable max length rule for index.js
      }
    },
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true
      },
      rules: {}
    }
  ],
  globals: {},
  ignorePatterns: ['functions/**/*.js'] // Globally ignore certain folders
}
