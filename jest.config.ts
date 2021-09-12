/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["dist"],
  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/core/$1",
    "@useCases/(.*)": "<rootDir>/src/core/useCases/$1",
    "@adapters/(.*)": "<rootDir>/src/adapters/$1",
    "@infrastructure/(.*)": "<rootDir>/src/infrastructure/$1",
  }
};