module.exports = {

    rootDir: './',

    testMatch: ['**/*.test.js'],

    testPathIgnorePatterns: [
        '/node_modules/',
        '/AppData/',
        '/anaconda3/',
        '/Users/ASUS/AppData/Local/Docker/',
        '/Users/ASUS/AppData/Local/GitHubDesktop/',

    ],

    modulePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/path/to/other/ignored/directories/'
    ],

    verbose: true,
};