module.exports = {

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // Automatically clear mock calls and instances between every test
  clearMocks: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**',
    '!**/test/**'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  },

  // A preset that is used as a base for Jest's configuration
  preset: '@shelf/jest-mongodb'
}
