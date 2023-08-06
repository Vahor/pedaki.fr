const sharedConfig = require("@pedaki/common/styles/tailwind.config");

module.exports = {
    presets: [sharedConfig],
    content: [
// @ts-ignore
        ...sharedConfig.content,
        "../../node_modules/@pedaki/common/**/*.{ts,tsx}",
        "nextra.config.tsx",
    ],
    theme: {
        extend: {
        }
    }
};