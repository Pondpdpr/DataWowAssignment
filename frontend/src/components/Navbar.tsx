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
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const navbarContentCSS = `flex flex-row w-full gap-[10px] py-[16px] px-[8px] items-center text-[24px] text-black rounded-[8px] hover:bg-[#EAF5F9] transition-colors`;

  return (
    <div
      className={`fixed flex flex-col justify-between top-0 left-0 z-40 w-[240px] h-screen py-10 bg-secondaryBG ${roboto.className} border-r-2 transition-transform -translate-x-full sm:translate-x-0`}
      aria-disabled={isOpen}
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
  );
}
