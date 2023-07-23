const sharedConfig = require("@pedaki/common/tailwind.config");

module.exports = {
    presets: [sharedConfig],
    content: [
// @ts-ignore
        ...sharedConfig.content,
        "nextra.config.tsx",
    ]
};