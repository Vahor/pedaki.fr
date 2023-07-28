module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "next",
        "prettier",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked"
    ],
    ignorePatterns: [
        "*.tsbuildinfo",
        "node_modules",
        "dist",
        "coverage",
    ],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": ["warn", {argsIgnorePattern: "^_"}],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-empty-function": "off",
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }]
    },
};