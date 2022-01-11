module.exports = {
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': [
      'error',
      '^\\.?[a-z-]+\\.?(config|test|queries|types)?\\.?(d)?$',
      true,
    ],
    'filenames/match-exported': [
      'error',
      'kebab',
      '\\.(config|test|queries|types)$',
      true,
    ],
    'filenames/no-index': 'off',
  },
}
