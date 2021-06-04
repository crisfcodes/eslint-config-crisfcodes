const readPkgUp = require('read-pkg-up')

let hasTypescript = false

try {
  const {packageJson} = readPkgUp.sync({normalize: true})
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  })

  hasTypescript = allDeps.includes('typescript')
} catch (error) {
  // ignore error
}

module.exports = {
  plugins: ['eslint-comments', 'eslint-plugin-tsdoc'],

  rules: {
    'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        ...(hasTypescript
          ? // validating that TypeScript doc comments conform to the TSDoc specification
            {'tsdoc/syntax': 'error'}
          : null),
      },
    },
    {
      files: [
        '**/__tests__/*.ts',
        '**/__tests__/*.tsx',
        '**/*.test.tsx',
        '**/*.test.ts',
      ],
      rules: {
        ...(hasTypescript
          ? // validating that TypeScript doc comments conform to the TSDoc specification
            {'tsdoc/syntax': 'off'}
          : null),
      },
    },
  ],
}
