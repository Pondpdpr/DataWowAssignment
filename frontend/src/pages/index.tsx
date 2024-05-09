import Stat from "@/components/Stat";
import { useState } from "react";
import { HOMEPAGETAB } from "../../public/enum/tab";

export default function Home() {
  const [tab, setTab] = useState(HOMEPAGETAB.OVERVIEW);
  console.log(tab);

  const renderTabButton = () => {
    const tabButtonCSS = `pt-[10px] pb-[8px] px-[16px] text-[24px] border-b-[2px] border-b-primaryBG hover:font-[600] hover:text-[#1692EC]  hover:border-b-[#1692EC]`;
    return (
      <>
        <button
          className={`${tabButtonCSS} ${
            tab === HOMEPAGETAB.OVERVIEW ? "font-[600] text-[#1692EC]  border-b-[#1692EC]" : "text-[#5C5C5C]"
          }`}
          onClick={() => {
            setTab(HOMEPAGETAB.OVERVIEW);
          }}
        >
          Overview
        </button>
        <button
          className={`${tabButtonCSS} ${
            tab === HOMEPAGETAB.CREATE ? "font-[600] text-[#1692EC]  border-b-[#1692EC]" : "text-[#5C5C5C]"
          }`}
          onClick={() => {
            setTab(HOMEPAGETAB.CREATE);
          }}
        >
          Create
        </button>
      </>
    );
  };

  return (
    <main className={`flex flex-col gap-[48px] min-h-screen items-center py-16 px-10 bg-primaryBG`}>
      <Stat />
      <div className="w-full flex flex-col gap-[22px]">
        <div className={`flex flex-row gap-[22px]`}>{renderTabButton()}</div>
      </div>
    </main>
  );
}
