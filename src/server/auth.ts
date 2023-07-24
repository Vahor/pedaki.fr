import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from "next-auth";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      image: string;
      name: string;
    };
  }
}

const useSecureCookies = process.env.NODE_ENV === "production";

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV !== "production",
  useSecureCookies: useSecureCookies,
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain:
          process.env.NODE_ENV === "production" ? ".pedaki.fr" : undefined,
        secure: useSecureCookies,
      },
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [],
};

export const auth = () => {
  return getServerSession(authOptions);
};
