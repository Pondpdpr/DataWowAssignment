import Stat from "@/components/Stat";
import Image from "next/image";
import { useState } from "react";
import { HOMEPAGETAB } from "../../public/enum/tab";
import trashIcon from "../../public/trash-2.svg";
import userIcon from "../../public/user.svg";

export default function Home() {
  const [tab, setTab] = useState(HOMEPAGETAB.OVERVIEW);
  const mockConcert = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
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

  const renderOverview = (concerts: any[]) => {
    const content =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
      <div className="flex flex-col gap-[48px]">
        {concerts.map((concert) => {
          return (
            <div key={concert.id} className="flex flex-col gap-[32px] p-[40px] border-[1px] rounded-[8px]">
              <div className="flex flex-col gap-[24px]">
                <span className="text-[32px] text-[#1692EC] font-[600]">Concert Name 1</span>
                <hr />
                <div className="text-[24px]">{content}</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Image src={userIcon} alt="user" />
                  <span className="text-[24px]">500</span>
                </div>
                <button className="py-[12px] px-[16px] flex flex-row gap-[10px] items-center bg-[#E84E4E] rounded-[4px]">
                  <Image className="w-[24px] h-[24px]" src={trashIcon} alt="trash" />
                  <span className="text-white text-[24px]">Delete</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main className={`flex flex-col gap-[48px] min-h-screen items-center py-16 px-10 bg-primaryBG`}>
      <Stat />
      <div className="w-full flex flex-col gap-[22px]">
        <div className={`flex flex-row gap-[22px]`}>{renderTabButton()}</div>
        {renderOverview(mockConcert)}
      </div>
    </main>
  );
}
