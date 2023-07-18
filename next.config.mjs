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
    experimental: {
        appDir: true,
    },

    redirects: async () => [
        {
            source: '/docs',
            destination: '/docs/getting-started',
            permanent: false,
        },
    ]

};

export default withNextra(config);
