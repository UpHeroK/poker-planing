module.exports = {
  preset: 'ts-jest',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/__mocks__/svgMock.js'
    },
  };