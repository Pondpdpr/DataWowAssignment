import Image from "next/image";
import cancelIcon from "../../public/cancel.svg";
import reservedIcon from "../../public/reserved.svg";
import seatIcon from "../../public/seat.svg";

export default function Stat() {
  const statCSS = `basis-full py-6 flex flex-col gap-[10px] items-center rounded-[8px]`;
  return (
    <div className="flex flex-row w-full gap-[30px] h-auto text-white">
      <div className={`${statCSS} bg-[#0070A4]`}>
        <Image className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]" src={seatIcon} alt="seat" />
        <span className="text-[12px] sm:text-[24px] text-center h-[36px] sm:h-full">Total of Seats</span>
        <span className="text-[28px] sm:text-[36px] lg:text-[60px]">500</span>
      </div>
      <div className={`${statCSS} bg-[#00A58B]`}>
        <Image className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]" src={reservedIcon} alt="reserved" />
        <span className="text-[12px] sm:text-[24px] h-[36px] sm:h-full">Reserve</span>
        <span className="text-[28px] sm:text-[36px] lg:text-[60px]">120</span>
      </div>
      <div className={`${statCSS} bg-[#E84E4E]`}>
        <Image className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]" src={cancelIcon} alt="cancel" />
        <span className="text-[12px] sm:text-[24px] h-[36px] sm:h-full">Cancel</span>
        <span className="text-[28px] sm:text-[36px] lg:text-[60px]">12</span>
      </div>
    </div>
  );
}
