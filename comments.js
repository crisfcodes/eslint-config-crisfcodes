module.exports = {
  plugins: ['eslint-comments'],

  rules: {
    'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-restricted-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-use': 'off', // I don't quite understand the use of this rule at the moment.
    'eslint-comments/require-description': 'error',
  },
}
