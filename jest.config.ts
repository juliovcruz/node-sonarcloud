module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*ts'
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    collectCoverage: true,
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest'
    }
  }