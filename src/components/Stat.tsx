import Image from "next/image";
import cancelIcon from "../../public/cancel.svg";
import reservedIcon from "../../public/reserved.svg";
import seatIcon from "../../public/seat.svg";

export default function Stat(props: any) {
  const statCSS = `basis-full py-6 flex flex-row md:flex-col gap-[10px] items-center rounded-[8px] px-[16px]`;
  return (
    <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[30px] h-auto text-white">
      <div className={`${statCSS} bg-[#0070A4]`}>
        <Image src={seatIcon} alt="seat" />
        <span className="text-[16px] sm:text-[24px] md:text-center sm:h-full w-full">Total of Seats</span>
        <span className="text-[32px] lg:text-[60px]">{props.seats}</span>
      </div>
      <div className={`${statCSS} bg-[#00A58B]`}>
        <Image src={reservedIcon} alt="reserved" />
        <span className="text-[16px] sm:text-[24px] md:text-center sm:h-full w-full">Reserve</span>
        <span className="text-[32px] lg:text-[60px]">{props.reserved}</span>
      </div>
      <div className={`${statCSS} bg-[#E84E4E]`}>
        <Image src={cancelIcon} alt="cancel" />
        <span className="text-[16px] sm:text-[24px] md:text-center sm:h-full w-full">Cancel</span>
        <span className="text-[32px] lg:text-[60px]">{props.canceled}</span>
      </div>
    </div>
  );
}
