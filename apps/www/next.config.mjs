import "./src/env.mjs";
import million from "million/compiler";
import {env} from "~/env.mjs";

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
            source: '/login',
            destination: `${env.NEXT_PUBLIC_APP_URL}/auth/login`,
            permanent: false,
        },
        {
            source: '/community',
            destination: `https://discord.gg/${env.NEXT_PUBLIC_DISCORD_INVITE}`,
            permanent: false,
        },
        {
            source: '/support',
            destination: `https://github.com/vahor/pedaki-pedaki.fr/issues/new/choose`,
            permanent: false,
        }
    ],

    compiler: {
        // removeConsole: process.env.NODE_ENV === "production"
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

// million is not needed here, it's just a test to see if it works
//  before adding it to the other apps
export default million.next(config, {
    auto: {rsc: true},
});
