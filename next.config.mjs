import withMDX from '@next/mdx';

const withMdxConfig = withMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  experimental: {
    appDir: true,
  }
};

export default withMdxConfig(config);
