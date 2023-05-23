/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalSetup: "<rootDir>/test/helpers/globalSetup.ts",
  globalTeardown: "<rootDir>/test/helpers/globalTeardown.ts",
  setupFilesAfterEnv: ["<rootDir>/test/helpers/setupFile.ts"],
};
