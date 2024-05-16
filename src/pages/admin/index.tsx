import DeleteModal from "@/components/DeleteModal";
import Stat from "@/components/Stat";
import { BACKEND_URL } from "@/lib/constant";
import useRequireAuth from "@/lib/useRuquireAuth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HOMEPAGETAB } from "../../../public/enum/tab";
import saveIcon from "../../../public/save.svg";
import trashIcon from "../../../public/trash-2.svg";
import userIcon from "../../../public/user.svg";

export default function AdminPage() {
  useRequireAuth("admin");
  const { data: session } = useSession();
  const [tab, setTab] = useState(HOMEPAGETAB.OVERVIEW);
  const [formData, setFormData] = useState({
    concertName: "",
    totalSeat: 500,
    description: "",
  });
  const [isConfirm, setConfirm] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState({ id: "" });
  const [concert, setConcert] = useState<any[]>([]);
  const [stat, setStat] = useState({ seats: 0, reserved: 0, canceled: 0 });

  const fetchData = async () => {
    const concertResponse = await fetch(`${BACKEND_URL}/concert`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
    });
    if (concertResponse.ok) {
      setConcert(await concertResponse.json());
    }

    const statResponse = await fetch(`${BACKEND_URL}/concert/stat`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
    });
    if (statResponse.ok) {
      setStat(await statResponse.json());
    }
  };

  const deleteConcert = async (concertId: string) => {
    const response = await fetch(`${BACKEND_URL}/concert/${concertId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
    });
    return response;
  };

  const createConcert = async (concertName: string, description: string, limit: number | string) => {
    const body = JSON.stringify({
      name: concertName,
      description,
      limit,
    });
    const response = await fetch(`${BACKEND_URL}/concert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.access_token,
      },
      body,
    });
    return response;
  };

  useEffect(() => {
    fetchData();
  }, [session]);

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    let fieldValue: any;
    if (fieldName !== "totalSeat") fieldValue = e.target.value;
    else {
      if (!e.target.value || e.target.value < 0) fieldValue = "0";
      else {
        fieldValue = parseInt(e.target.value).toString();
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleCreate = async () => {
    if (!formData.concertName || !formData.description) {
      alert("please fill all fields");
      return;
    }
    const res = await createConcert(formData.concertName, formData.description, formData.totalSeat);
    if (res?.ok) {
      toast.success("Create Successfully");
      fetchData();
      setTab(HOMEPAGETAB.OVERVIEW);
      setFormData({
        concertName: "",
        totalSeat: 500,
        description: "",
      });
    } else {
      alert("create failed");
    }
  };

  const onConfirmDelete = async () => {
    const res = await deleteConcert(selectedConcert.id);
    if (res?.ok) {
      toast.success("Delete Successfully");
      fetchData();
    } else {
      alert("delete failed");
    }
  };

  const renderTabButton = () => {
    const tabButtonCSS = `pt-[10px] pb-[8px] px-[16px] text-[22px] lg:text-[24px] border-b-[2px] hover:font-[600] hover:text-[#1692EC]`;
    return (
      <>
        <button
          className={`${tabButtonCSS} ${
            tab === HOMEPAGETAB.OVERVIEW
              ? "font-[600] text-[#1692EC]  border-b-[#1692EC]"
              : "text-[#5C5C5C] border-b-primaryBG"
          }`}
          onClick={() => {
            setTab(HOMEPAGETAB.OVERVIEW);
          }}
        >
          Overview
        </button>
        <button
          className={`${tabButtonCSS} ${
            tab === HOMEPAGETAB.CREATE
              ? "font-[600] text-[#1692EC]  border-b-[#1692EC]"
              : "text-[#5C5C5C] border-b-primaryBG"
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

  const renderOverview = () => {
    return (
      <div className="flex flex-col gap-[48px]">
        {concert.map((oneConcert) => {
          return (
            <div key={oneConcert.id} className="flex flex-col gap-[32px] p-[40px] border-[1px] rounded-[8px]">
              <div className="flex flex-col gap-[24px]">
                <span className="text-wrap text-ellipsis overflow-hidden text-[24px] lg:text-[32px] text-[#1692EC] font-[600]">
                  {oneConcert.name}
                </span>
                <hr />
                <div className="text-[20px] lg:text-[24px]">{oneConcert.description}</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Image src={userIcon} alt="user" />
                  <span className="text-[24px]">{oneConcert.limit}</span>
                </div>
                <button
                  onClick={() => {
                    setConfirm(true);
                    setSelectedConcert(oneConcert);
                  }}
                  className="py-[12px] px-[16px] flex flex-row gap-[10px] items-center bg-[#E84E4E] hover:bg-[#fa8383] rounded-[4px]"
                >
                  <Image className="w-[24px] h-[24px]" src={trashIcon} alt="trash" />
                  <span className="text-white text-[24px] hidden sm:block">Delete</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderCreate = () => {
    return (
      <div className="w-full h-full flex flex-col gap-[32px] p-[40px] border-[1px] border-[#C2C2C2] rounded-[8px]">
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[32px] sm:text-[40px] text-[#1692EC] font-[600]">Create</h1>
          <hr />
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-[24px]">
            <div className="flex flex-col gap-[16px] w-full">
              <label className="text-[20px] sm:text-[24px] font-[400]">Concert name</label>
              <input
                className="text-[12px] sm:text-[16px] py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
                type="text"
                name="concertName"
                onChange={handleInput}
                value={formData.concertName}
                placeholder="Please input concert name"
              />
            </div>

            <div className="flex flex-col gap-[16px] w-full">
              <label className="text-[20px] sm:text-[24px] font-[400]">Total of seat</label>
              <div className="w-full relative">
                <input
                  className="text-[12px] sm:text-[16px] w-full py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
                  type="number"
                  onChange={handleInput}
                  value={formData.totalSeat}
                  name="totalSeat"
                />
                <Image className="w-[24px] h-[24px] block absolute top-3 right-4" src={userIcon} alt="user" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="text-[20px] sm:text-[24px] font-[400]">Description</label>
            <textarea
              className="text-[12px] sm:text-[16px] py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
              name="description"
              onChange={handleInput}
              value={formData.description}
              placeholder="Please input description"
            ></textarea>
          </div>
        </div>

        <button
          onClick={() => handleCreate()}
          className="justify-center items-center w-[120px] sm:w-[160px] mr-0 ml-auto py-[12px] px-[16px] flex flex-row gap-[10px] bg-[#1692EC] rounded-[4px]"
          type="submit"
        >
          <Image className="w-[24px] h-[24px]" src={saveIcon} alt="save" />
          <span className="text-white text-[20px] sm:text-[24px]">Save</span>
        </button>
      </div>
    );
  };

  return (
    <main className={`flex flex-col h-full gap-[48px] min-h-screen items-center py-16 px-10 bg-primaryBG`}>
      <Stat {...stat} />
      <div className="w-full h-full flex flex-col gap-[22px]">
        <div className={`flex flex-row gap-[22px]`}>{renderTabButton()}</div>
        {tab === HOMEPAGETAB.OVERVIEW ? renderOverview() : renderCreate()}
      </div>
      {isConfirm && (
        <DeleteModal onConfirm={() => onConfirmDelete()} onClose={() => setConfirm(false)} concert={selectedConcert} />
      )}
    </main>
  );
}
