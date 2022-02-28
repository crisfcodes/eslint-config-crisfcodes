module.exports = {
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': [
      'error',
      '^\\.?[a-z-]+\\.?(config|test|queries|types|stories|logic|layout|models|generated|styles)?\\.?(d)?$',
      true,
    ],
    'filenames/match-exported': [
      'error',
      'kebab',
      '\\.(config|test|queries|types|stories|logic|layout|models|generated|styles)$',
      true,
    ],
    'filenames/no-index': 'off',
  },
}
