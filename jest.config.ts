module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*ts',
      '!<rootDir>/src/**'
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest'
    }
  }