import "./src/env.mjs";

import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './nextra.config.tsx',
    defaultShowCopyCode: true,
    flexsearch: {
        codeblocks: true
    },
    codeHighlight: true
})

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,

    swcMinify: true,
    poweredByHeader: false,
    experimental: {
        appDir: true,
        serverActions: true,
    },

    transpilePackages: ["@pedaki/common"],


    redirects: async () => [
        {
            source: '/',
            destination: '/-/getting-started',
            permanent: false,
        }
    ],

    compiler: {
        removeConsole: process.env.NODE_ENV === "production"
    },

    eslint: {
        // Already checked in ci
        ignoreDuringBuilds: true
    },

    typescript: {
        // Already checked in ci
        ignoreBuildErrors: true
    }

};

export default withNextra(config);
