import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import historyIcon from "../../public/history.svg";
import homeIcon from "../../public/home.svg";
import swapIcon from "../../public/swap.svg";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-[240px] h-screen py-10 bg-primaryBG ${roboto.className} border-r-2`}
      aria-disabled={isOpen}
    >
      <div className="p-6 h-[108px] text-[40px] font-[600] text-black">Admin</div>
      <div className="h-full">
        <ul>
          <li className="p-[8px] h-[84px] ">
            <Link
              href="/"
              className="flex flex-row gap-[10px] py-[16px] px-[8px] items-center text-[24px] text-black rounded-[8px] hover:bg-[#EAF5F9]"
            >
              <Image src={homeIcon} alt="home" />
              <span>Home</span>
            </Link>
          </li>
          <li className="p-[8px] h-[84px] ">
            <Link
              href="history"
              className="flex flex-row gap-[10px] py-[16px] px-[8px] items-center text-[24px] text-black rounded-[8px] hover:bg-[#EAF5F9]"
            >
              <Image src={historyIcon} alt="history" />
              <span>History</span>
            </Link>
          </li>
          <li className="p-[8px] h-[84px] ">
            <button className="flex flex-row gap-[10px] w-full py-[16px] px-[8px] justify-items-start items-center text-[24px] text-black rounded-[8px] hover:bg-[#EAF5F9]">
              <Image src={swapIcon} alt="swap" />
              <span>Switch to user</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
