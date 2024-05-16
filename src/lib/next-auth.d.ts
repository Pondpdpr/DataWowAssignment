import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name: string;
    };
    access_token: string;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      email: string;
      name: string;
    };
    access_token: string;
  }
}
