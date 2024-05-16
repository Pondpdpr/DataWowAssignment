import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import cancelIcon from "../../public/cancel.svg";
import reservedIcon from "../../public/reserved.svg";
import seatIcon from "../../public/seat.svg";

export default function Stat() {
  const { data: session } = useSession();
  const [data, setData] = useState({ seats: 0, reserved: 0, canceled: 0 });

  const getConcertStat = async () => {
    const response = await fetch(`http://localhost:3001/concert/stat`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    return response;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getConcertStat();
      if (res?.ok) {
        setData(await res.json());
      }
    };
    fetchData();
  }, [session]);

  const statCSS = `basis-full py-6 flex flex-row md:flex-col gap-[10px] items-center rounded-[8px] px-[16px]`;
  return (
    <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[30px] h-auto text-white">
      <div className={`${statCSS} bg-[#0070A4]`}>
        <Image src={seatIcon} alt="seat" />
        <span className="text-[16px] sm:text-[24px] md:text-center sm:h-full w-full">Total of Seats</span>
        <span className="text-[32px] lg:text-[60px]">{data.seats}</span>
      </div>
      <div className={`${statCSS} bg-[#00A58B]`}>
        <Image src={reservedIcon} alt="reserved" />
        <span className="text-[16px] sm:text-[24px] md:text-center sm:h-full w-full">Reserve</span>
        <span className="text-[32px] lg:text-[60px]">{data.reserved}</span>
      </div>
      <div className={`${statCSS} bg-[#E84E4E]`}>
        <Image src={cancelIcon} alt="cancel" />
        <span className="text-[16px] sm:text-[24px] md:text-center sm:h-full w-full">Cancel</span>
        <span className="text-[32px] lg:text-[60px]">{data.canceled}</span>
      </div>
    </div>
  );
}
