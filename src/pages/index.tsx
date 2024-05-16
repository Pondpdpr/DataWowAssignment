import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <main className={`flex w-full h-full min-h-screen items-center bg-primaryBG`}>
      <span className="text-[400] w-full h-full text-[60px] sm:text-[120px] text-center align-middle">
        Data Wow Assigment
      </span>
    </main>
  );
}
