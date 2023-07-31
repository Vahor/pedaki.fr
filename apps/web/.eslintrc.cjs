// @ts-ignore
const baseConfig = require("@pedaki/eslint-config");

module.exports = {
    ...baseConfig,
    parserOptions: {
        ...baseConfig.parserOptions,
        project: true,
    }
}