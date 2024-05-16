import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CONCERTSTATUS } from "../../../public/enum/concertStatus";
import userIcon from "../../../public/user.svg";

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

export default function ConcertPage() {
  const { data: session } = useSession();
  const [concert, setConcert] = useState([]);

  const getConcert = async () => {
    const response = await fetch(`http://localhost:3001/concert`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
    });
    return response;
  };

  const getReserved = async () => {
    const response = await fetch(`http://localhost:3001/reservation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
    });
    return response;
  };

  const reserve = async (concertId: string) => {
    const response = await fetch(`http://localhost:3001/reservation/${concertId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
    });
    return response;
  };

  const cancel = async (reservationId: string) => {
    const response = await fetch(`http://localhost:3001/reservation/cancel/${reservationId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
    });
    return response;
  };

  const fetchData = async () => {
    const concertRes = await getConcert();
    const reservedRes = await getReserved();
    if (concertRes?.ok && reservedRes?.ok) {
      const concerts = await concertRes.json();
      const reserved = (await reservedRes.json()).map((reservation: any) => ({
        concertId: reservation.concertId,
        id: reservation.id,
      }));
      setConcert(
        concerts.map((concert: any) => {
          concert.status = "available";
          if (reserved.find((reservation: any) => reservation.concertId === concert.id)) {
            concert.status = "reserved";
            concert.reservation = reserved.find((reservation: any) => reservation.concertId === concert.id).id;
          } else if (concert.limit <= parseInt(concert.reserved)) {
            concert.status = "full";
          }
          return concert;
        })
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, [session]);

  const handleReserve = async (concertId: string) => {
    const res = await reserve(concertId);
    if (!res?.ok) {
      alert("reservation failed");
    }
    fetchData();
  };

  const handleCancel = async (reservationId: string) => {
    const res = await cancel(reservationId);
    if (!res?.ok) {
      alert("cancelation failed");
    }
    fetchData();
  };

  const renderConcerts = () => {
    return (
      <div className="flex flex-col w-full gap-[48px]">
        {concert.map((oneConcert: any) => {
          return (
            <div key={oneConcert.id} className="flex flex-col w-full gap-[32px] p-[40px] border-[1px] rounded-[8px]">
              <div className="flex flex-col gap-[24px]">
                <span className="text-wrap text-ellipsis overflow-hidden text-[24px] lg:text-[32px] text-[#1692EC] font-[600]">
                  {oneConcert.name}
                </span>
                <hr />
                <div className="text-[20px] lg:text-[24px]">{oneConcert.description}</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Image className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" src={userIcon} alt="user" />
                  <span className="text-[16px] sm:text-[24px]">{oneConcert.limit}</span>
                </div>

                <button
                  className={`w-[80px] sm:w-[160px] py-[12px] sm:px-[16px] items-center ${
                    (buttonColor as any)[oneConcert.status]
                  } rounded-[4px]`}
                  onClick={() =>
                    oneConcert.status === CONCERTSTATUS.AVAILABLE
                      ? handleReserve(oneConcert.id)
                      : handleCancel(oneConcert.reservation)
                  }
                  disabled={oneConcert.status === CONCERTSTATUS.FULL}
                >
                  <span className="text-white text-[16px] sm:text-[24px]">
                    {(buttonDisplay as any)[oneConcert.status]}
                  </span>
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
