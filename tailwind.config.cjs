const sharedConfig = require("@pedaki/common/styles/tailwind.config");

module.exports = {
    presets: [sharedConfig],
    content: [
// @ts-ignore
        ...sharedConfig.content,
        "nextra.config.tsx",
    ]
};