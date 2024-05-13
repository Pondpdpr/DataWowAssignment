import Image from "next/image";
import { CONCERTSTATUS } from "../../../public/enum/concertStatus";
import userIcon from "../../../public/user.svg";

export default function History() {
  const buttonDisplay = {
    reserved: "Cancel",
    available: "Reserve",
    full: "Full",
  };
  const buttonColor = {
    reserved: "bg-[#F96464] hover:bg-[#fa8383]",
    available: "bg-[#1692EC] hover:bg-[#45a8f0]",
    full: "bg-[#C2C2C2]",
  };
  const mockConcert = [
    {
      id: 1,
      status: "reserved",
    },
    {
      id: 2,
      status: "available",
    },
    {
      id: 3,
      status: "full",
    },
  ];

  const renderConcerts = () => {
    const content =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
      <div className="flex flex-col gap-[48px]">
        {mockConcert.map((concert) => {
          console.log(concert);
          console.log((buttonColor as any)[concert.status]);
          console.log((buttonDisplay as any)[concert.status]);
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

                <button
                  className={`w-[160px] py-[12px] px-[16px] items-center ${
                    (buttonColor as any)[concert.status]
                  } rounded-[4px]`}
                  disabled={concert.status === CONCERTSTATUS.FULL}
                >
                  <span className="text-white text-[24px]">{(buttonDisplay as any)[concert.status]}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main className={`flex flex-col h-full min-h-screen items-center py-16 px-10 bg-primaryBG`}>
      {renderConcerts()}
    </main>
  );
}
