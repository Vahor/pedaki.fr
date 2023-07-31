import "./src/env.mjs";

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
            destination: `${process.env.NEXT_PUBLIC_DOCS_URL}`,
            permanent: false,
        },
        {
            source: '/docs/:path*',
            destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/-/:path*`,
            permanent: false,
        },
        {
            source: '/login',
            destination: `${process.env.NEXT_PUBLIC_APP_URL}/auth/login`,
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

export default config;
