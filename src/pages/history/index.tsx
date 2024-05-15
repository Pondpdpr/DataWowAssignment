import getLog from "@/api/getLog";
import { useEffect, useState } from "react";

export default function History() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const payload = await getLog();
      setData(payload);
    };
    fetchData();
  }, []);

  return (
    <main className={`flex flex-col h-full min-h-screen items-center py-16 px-10 bg-primaryBG`}>
      <div className="grid grid-cols-4 w-full border-[1px] border-[#5B5B5B] rounded-[4px]">
        <h1 className="border-r-[1px] border-[#5B5B5B] py-[8px] sm:py-[10px] px-[8px] sm:px-[12px] text-[12px] sm:text-[20px] font-[600]">
          Date time
        </h1>
        <h1 className="border-r-[1px] border-[#5B5B5B] py-[8px] sm:py-[10px]  px-[8px] sm:px-[12px] text-[12px] sm:text-[20px] font-[600]">
          Username
        </h1>
        <h1 className="border-r-[1px] border-[#5B5B5B] py-[8px] sm:py-[10px]  px-[8px] sm:px-[12px] text-[12px] sm:text-[20px] font-[600]">
          Concert name
        </h1>
        <h1 className="py-[8px] sm:py-[10px]  px-[8px] sm:px-[12px] text-[12px] sm:text-[20px] font-[600]">Action</h1>
        {data.map((action) => (
          <>
            <div className="border-r-[1px] border-t-[1px] border-[#5B5B5B] py-[4px] sm:py-[10px] px-[6px] sm:px-[12px] text-ellipsis overflow-hidden  text-[8px] sm:text-[16px] font-[400]">
              {action.created_at}
            </div>
            <div className="border-r-[1px] border-t-[1px] border-[#5B5B5B] py-[4px] sm:py-[10px] px-[6px] sm:px-[12px] text-ellipsis overflow-hidden  text-[8px] sm:text-[16px] font-[400]">
              {action.username}
            </div>
            <div className="border-r-[1px] border-t-[1px] border-[#5B5B5B] py-[4px] sm:py-[10px] px-[6px] sm:px-[12px] text-ellipsis overflow-hidden  text-[8px] sm:text-[16px] font-[400]">
              {action.concertname}
            </div>
            <div className="border-t-[1px] border-[#5B5B5B] py-[4px] sm:py-[10px] px-[6px] sm:px-[12px] text-ellipsis overflow-hidden text-[8px] sm:text-[16px] font-[400]">
              {action.action}
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
