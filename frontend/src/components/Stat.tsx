import Image from "next/image";
import cancelIcon from "../../public/cancel.svg";
import reservedIcon from "../../public/reserved.svg";
import seatIcon from "../../public/seat.svg";

export default function Stat() {
  const statCSS = `basis-full py-6 flex flex-col gap-[10px] items-center bg-emerald-100 rounded-[8px]`;
  return (
    <div className="flex flex-row w-full gap-[30px] h-auto">
      <div className={`${statCSS} bg-[#0070A4]`}>
        <Image src={seatIcon} alt="seat" />
        <span className="text-[24px]">Total of Seats</span>
        <span className="text-[60px]">500</span>
      </div>
      <div className={`${statCSS} bg-[#00A58B]`}>
        <Image src={reservedIcon} alt="reserved" />
        <span className="text-[24px]">Reserve</span>
        <span className="text-[60px]">120</span>
      </div>
      <div className={`${statCSS} bg-[#E84E4E]`}>
        <Image src={cancelIcon} alt="cancel" />
        <span className="text-[24px]">Cancel</span>
        <span className="text-[60px]">12</span>
      </div>
    </div>
  );
}
