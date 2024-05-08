import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className={`${roboto.className} sm:ml-[240px]`}>
        <Component {...pageProps} />;
      </div>
    </>
  );
}
