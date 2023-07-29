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
            source: '/docs',
            destination: '/docs/getting-started',
            permanent: false,
        },
        {
            source: '/login',
            destination: process.env.NODE_ENV === "production" ? 'https://app.pedaki.fr/auth/login' : "http://localhost:4242/auth/login",
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
