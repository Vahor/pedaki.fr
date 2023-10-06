module.exports = {
    extends: ['@pedaki/eslint-config'],
    parserOptions: {
        project: true,
    },
    ignorePatterns: ['**/dist/**/*', '**/node_modules/**/*', '**/scripts/**/*', ".next"],
    rules: {
        'node/file-extension-in-import': ['off', 'always'],
        'node/no-extraneous-import': ['off', 'always'],
        'node/no-unsupported-features/es-syntax': ['off', 'always'],
    }
};