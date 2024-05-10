import DeleteModal from "@/components/deleteModal";
import Stat from "@/components/Stat";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { HOMEPAGETAB } from "../../public/enum/tab";
import saveIcon from "../../public/save.svg";
import trashIcon from "../../public/trash-2.svg";
import userIcon from "../../public/user.svg";

export default function Home() {
  const [tab, setTab] = useState(HOMEPAGETAB.OVERVIEW);
  const [formData, setFormData] = useState({
    concertName: "",
    totalSeat: 500,
    description: "",
  });
  const [isConfirm, setConfirm] = useState(false);
  const [deleteConcert, setDeleteConcert] = useState({});
  const mockConcert = [
    {
      id: 1,
      name: "Concert 1",
    },
    {
      id: 2,
      name: "Concert 2",
    },
  ];

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

  const handleCreate = () => {
    toast.success("Create Successfully");
    setTab(HOMEPAGETAB.OVERVIEW);
  };

  const onConfirmDelete = () => {
    toast.success("Delete Successfully");
  };

  const renderTabButton = () => {
    const tabButtonCSS = `pt-[10px] pb-[8px] px-[16px] text-[24px] border-b-[2px] border-b-primaryBG hover:font-[600] hover:text-[#1692EC] hover:border-b-[#1692EC]`;
    return (
      <>
        <button
          className={`${tabButtonCSS} ${
            tab === HOMEPAGETAB.OVERVIEW ? "font-[600] text-[#1692EC]  border-b-[#1692EA]" : "text-[#5C5C5C]"
          }`}
          onClick={() => {
            setTab(HOMEPAGETAB.OVERVIEW);
          }}
        >
          Overview
        </button>
        <button
          className={`${tabButtonCSS} ${
            tab === HOMEPAGETAB.CREATE ? "font-[600] text-[#1692EC]  border-b-[#1692EA]" : "text-[#5C5C5C]"
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
    const content =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
      <div className="flex flex-col gap-[48px]">
        {mockConcert.map((concert) => {
          return (
            <div key={concert.id} className="flex flex-col gap-[32px] p-[40px] border-[1px] rounded-[8px]">
              <div className="flex flex-col gap-[24px]">
                <span className="text-[32px] text-[#1692EC] font-[600]">{concert.name}</span>
                <hr />
                <div className="text-[24px]">{content}</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Image src={userIcon} alt="user" />
                  <span className="text-[24px]">500</span>
                </div>
                <button
                  onClick={() => {
                    setConfirm(true);
                    setDeleteConcert(concert);
                  }}
                  className="py-[12px] px-[16px] flex flex-row gap-[10px] items-center bg-[#E84E4E] hover:bg-[#fa8383] rounded-[4px]"
                >
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

  const renderCreate = () => {
    return (
      <div className="w-full h-full flex flex-col gap-[32px] p-[40px] border-[1px] border-[#C2C2C2] rounded-[8px]">
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[40px] text-[#1692EC] font-[600]">Create</h1>
          <hr />
          <div className="flex flex-row gap-[24px]">
            <div className="flex flex-col gap-[16px] w-full">
              <label className="text-[24px] font-[400]">Concert name</label>
              <input
                className="py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
                type="text"
                name="concertName"
                onChange={handleInput}
                value={formData.concertName}
                placeholder="Please input concert name"
              />
            </div>

            <div className="flex flex-col gap-[16px] w-full">
              <label className="text-[24px] font-[400]">Total of seat</label>
              <div className="w-full relative">
                <input
                  className="w-full py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
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
            <label className="text-[24px] font-[400]">Description</label>
            <textarea
              className="py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
              name="description"
              onChange={handleInput}
              value={formData.description}
              placeholder="Please input description"
            ></textarea>
          </div>
        </div>

        <button
          onClick={() => handleCreate()}
          className="justify-center items-center w-[160px] mr-0 ml-auto py-[12px] px-[16px] flex flex-row gap-[10px] bg-[#1692EC] rounded-[4px]"
          type="submit"
        >
          <Image className="w-[24px] h-[24px]" src={saveIcon} alt="save" />
          <span className="text-white text-[24px]">Save</span>
        </button>
      </div>
    );
  };

  return (
    <main className={`flex flex-col h-full gap-[48px] min-h-screen items-center py-16 px-10 bg-primaryBG`}>
      <Stat />
      <div className="w-full h-full flex flex-col gap-[22px]">
        <div className={`flex flex-row gap-[22px]`}>{renderTabButton()}</div>
        {tab === HOMEPAGETAB.OVERVIEW ? renderOverview() : renderCreate()}
      </div>
      {isConfirm && (
        <DeleteModal onConfirm={() => onConfirmDelete()} onClose={() => setConfirm(false)} concert={deleteConcert} />
      )}
    </main>
  );
}
