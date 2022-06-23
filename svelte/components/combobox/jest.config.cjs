module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: './svelte.config.js'
      }
    ]
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  moduleNameMapper: {
    '^\\$lib(.*)$': '<rootDir>/src/lib$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@irispixel)/(svelte-popover))/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom'
};