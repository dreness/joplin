module.exports = {
	testMatch: [
		'**/*.test.js',
	],

	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/rnInjectedJs/',
		'<rootDir>/vendor/',
		'<rootDir>/services/searchengine/SearchFilter',
	],

	testEnvironment: 'node',

	setupFilesAfterEnv: [`${__dirname}/jest.setup.js`],
	slowTestThreshold: 40,
};
