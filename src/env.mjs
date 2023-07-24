import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET: z.string().min(1).default("secret"),
  },

  client: {
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
