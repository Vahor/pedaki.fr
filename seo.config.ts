import type { Metadata } from "next";

const defineMetadata = <T extends Metadata>(metadata: T) => metadata;

const seoConfig = defineMetadata({
  title: {
    template: "%s - Pedaki",
    default: "Pedaki",
  },
  description: "todo",
  themeColor: "#33887E",
  openGraph: {
    images: "/og-image.png",
    url: "https://pedaki.fr",
  },
  manifest: "/site.webmanifest",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "mask-icon", url: "/favicon.ico" },
    { rel: "image/x-icon", url: "/favicon.ico" },
  ],
});

export default seoConfig;
