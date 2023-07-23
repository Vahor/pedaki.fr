import type { Metadata } from "next";

const seoConfig = {
  metadataBase: new URL("https://pedaki.fr"),
  title: {
    template: "%s - Pedaki",
    default: "Pedaki",
  },
  description: "todo",
  themeColor: "#ffffff",
  openGraph: {
    images: "/og-image.png",
    url: "https://pedaki.fr",
  },
  robots: "index, follow",
  colorScheme: "light",
  manifest: "https://pedaki.fr/site.webmanifest",
  icons: [
    { rel: "icon", url: "https://pedaki.fr/favicon.ico" },
    { rel: "apple-touch-icon", url: "https://pedaki.fr/apple-touch-icon.png" },
    { rel: "mask-icon", url: "https://pedaki.fr/favicon.ico" },
    { rel: "image/x-icon", url: "https://pedaki.fr/favicon.ico" },
  ],
} satisfies Metadata;

export default seoConfig;
