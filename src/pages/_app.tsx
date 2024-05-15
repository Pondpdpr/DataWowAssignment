import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { toast as t, useToaster } from "react-hot-toast";
import checkIcon from "../../public/check-circle.svg";
import closeIcon from "../../public/CloseFilled.svg";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const Notifications = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;
  return (
    <div className="fixed top-[24px] right-[270px]" onMouseEnter={startPause} onMouseLeave={endPause}>
      {toasts.map((toast) => {
        const offset = calculateOffset(toast, {
          reverseOrder: false,
          gutter: 2,
        });
        const ref = (el: any) => {
          if (el && typeof toast.height !== "number") {
            const height = el.getBoundingClientRect().height;
            updateHeight(toast.id, height);
          }
        };

        return (
          <div
            key={toast.id}
            ref={ref}
            style={{
              transition: "all 0.5s ease-out",
              opacity: toast.visible ? 1 : 0,
              transform: `translateY(${offset}px)`,
              zIndex: 500,
            }}
            className="absolute flex flex-row w-[246px] h-[52px] px-[16px] justify-around items-center bg-[#D0E7D2] rounded-[6px]"
          >
            <Image src={checkIcon} alt="check" />
            <span className="font-[400] text-IBM text-[14px]">{toast.message?.toString()}</span>
            <button
              onClick={() => {
                t.dismiss(toast.id);
              }}
            >
              <Image src={closeIcon} alt="close" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Notifications />
      <Navbar />
      <div className={`${roboto.className} lg:ml-[240px]`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
