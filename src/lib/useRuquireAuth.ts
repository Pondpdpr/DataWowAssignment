import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function useRequireAuth(role = "") {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && typeof session != "undefined") {
      router.push(`/auth`);
    }

    if (role === "admin" && session?.user.role !== "admin") {
      router.push(`/user`);
    }
  }, [session, router]);

  return session;
}
export default useRequireAuth;
