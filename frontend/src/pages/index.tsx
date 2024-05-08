import Stat from "@/components/Stat";

export default function Home() {
  const statCSS = `basis-full py-6 flex flex-col gap-[10px] items-center bg-emerald-100 rounded-[8px]`;
  return (
    <main className={`flex min-h-screen flex-col items-center py-16 px-10 bg-primaryBG text-white`}>
      <Stat></Stat>
    </main>
  );
}
