import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET: z.string().min(1).default("secret"),

    GITHUB_ROADMAP_ACCESS_TOKEN: z.string(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().default("https://app.pedaki.fr"),
    NEXT_PUBLIC_DOCS_URL: z.string().url().default("https://docs.pedaki.fr"),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,

    GITHUB_ROADMAP_ACCESS_TOKEN: process.env.GITHUB_ROADMAP_ACCESS_TOKEN,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
