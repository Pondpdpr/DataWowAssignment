import Image from "next/image";
import deleteIcon from "../../public/delete.svg";

export default function DeleteModal({ onConfirm, onClose, concert }) {
  return (
    <div
      id="default-modal"
      className="aboslute fixed w-full h-full left-0 right-0 top-0 bottom-0 z-50 flex justify-center items-center bg-[#00000066]/[0.4] font-IBM"
    >
      <div className="w-[422px] flex flex-col gap-[24px] p-[24px] bg-secondaryBG rounded-[8px] items-center">
        <div className="flex flex-col gap-[24px] bg-secondaryBG rounded-[8px] items-center">
          <Image src={deleteIcon} alt="delete" />
          <span className="whitespace-pre-line text-center text-[20px] font-[700]">
            {`Are you sure to delete?\n”${concert.name}”`}
          </span>
        </div>
        <div className="w-full flex flex-row gap-[16px]">
          <button
            onClick={() => onClose()}
            className="w-full py[-12px] px-[16px] border-[1px] border-[#C4C4C4] rounded-[4px] bg-[#FFFFFF] text-[16px] text-[#262626] font-[500]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              onConfirm();
            }}
            className="w-full py-[12px] px-[16px] rounded-[4px] bg-[#E63946] text-[16px] text-[#FFFFFF] font-[500]"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
