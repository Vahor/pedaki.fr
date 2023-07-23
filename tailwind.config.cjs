const sharedConfig = require("@pedaki/common/src/tailwind.config");

module.exports = {
    presets: [sharedConfig],
    content: [
// @ts-ignore
        ...sharedConfig.content,
        "nextra.config.tsx",
        "node_modules/@pedaki/common/src/components/**/*.{ts,tsx}",
    ]
};