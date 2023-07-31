import NextAuth from 'next-auth';
import { authOptions } from '../../../../server/auth';

// eslint-disable-next-line @typescript-eslint/ban-types
const handler = NextAuth(authOptions) as Function;

export { handler as GET, handler as POST };
