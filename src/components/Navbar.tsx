import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import historyIcon from "../../public/history.svg";
import homeIcon from "../../public/home.svg";
import logoutIcon from "../../public/log-out.svg";
import swapIcon from "../../public/swap.svg";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export default function Navbar() {
  const [isOpen, setOpen] = useState(true);
  const router = useRouter();
  const navbarContentCSS = `flex flex-row w-full gap-[10px] py-[16px] px-[8px] items-center text-[24px] text-black rounded-[8px] hover:bg-[#EAF5F9] transition-colors`;
  console.log(isOpen);
  return (
    <>
      <button
        type="button"
        className={`absolute top-0 transition-transform ${
          isOpen ? "translate-x-[240px]" : "-translate-x-0"
        } inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-[#e2e2e2]`}
        onFocus={() => {
          setOpen(true);
          console.log(isOpen);
        }}
        onBlur={() => {
          setOpen(false);
          console.log(isOpen);
        }}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" fill="#7d7d7d" viewBox="0 0 20 20">
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <div
        className={`fixed flex flex-col justify-between top-0 left-0 z-40 w-[240px] h-screen py-10 bg-secondaryBG ${
          roboto.className
        } border-r-2 transition-transform lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <div className="p-6 h-[108px] text-[40px] font-[600] text-black">
            {router.pathname === "/user" ? "User" : "Admin"}
          </div>
          <div>
            <ul>
              {router.pathname !== "/user" && (
                <>
                  <li className="p-[8px] h-[84px] ">
                    <Link href="/" className={`${navbarContentCSS} ${router.pathname === "/" && `bg-[#EAF5F9]`}`}>
                      <Image src={homeIcon} alt="home" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="p-[8px] h-[84px] ">
                    <Link
                      href="history"
                      className={`${navbarContentCSS} ${router.pathname === "/history" && `bg-[#EAF5F9]`}`}
                    >
                      <Image src={historyIcon} alt="history" />
                      <span>History</span>
                    </Link>
                  </li>
                </>
              )}
              <li className="p-[8px] h-[84px] ">
                <Link href={router.pathname === "/user" ? "/" : "/user"} className={`${navbarContentCSS}`}>
                  <Image src={swapIcon} alt="swap" />
                  <span>Switch to user</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button className="flex flex-row w-auto gap-[10px] m-[8px] py-[16px] px-[8px] items-center text-[24px] text-black rounded-[8px] hover:bg-[#EAF5F9]">
          <Image src={logoutIcon} alt="logout" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
}
