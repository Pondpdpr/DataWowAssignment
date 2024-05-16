import LogIn from "@/components/LogIn";
import SignUp from "@/components/SignUp";
import { useState } from "react";

export enum AUTHTAB {
  LOGIN = "login",
  SIGNUP = "signup",
}
const SignupPage = () => {
  const [tab, setTab] = useState(AUTHTAB.LOGIN);

  const renderTabButton = () => {
    const tabButtonCSS = `pt-[10px] pb-[8px] px-[16px] text-[22px] lg:text-[24px] border-b-[2px] hover:font-[600] hover:text-[#1692EC]`;
    return (
      <>
        <button
          className={`${tabButtonCSS} ${
            tab === AUTHTAB.LOGIN
              ? "font-[600] text-[#1692EC]  border-b-[#1692EC]"
              : "text-[#5C5C5C] border-b-primaryBG"
          }`}
          onClick={() => {
            setTab(AUTHTAB.LOGIN);
          }}
        >
          Login
        </button>
        <button
          className={`${tabButtonCSS} ${
            tab === AUTHTAB.SIGNUP
              ? "font-[600] text-[#1692EC]  border-b-[#1692EC]"
              : "text-[#5C5C5C] border-b-primaryBG"
          }`}
          onClick={() => {
            setTab(AUTHTAB.SIGNUP);
          }}
        >
          Signup
        </button>
      </>
    );
  };

  return (
    <main className={`flex flex-col h-full gap-[48px] min-h-screen items-center py-16 px-10 bg-primaryBG`}>
      <div className="w-full h-full flex flex-col gap-[22px]">
        <div className={`flex flex-row gap-[22px]`}>{renderTabButton()}</div>
        {tab === AUTHTAB.LOGIN ? <LogIn /> : <SignUp onSignup={() => setTab(AUTHTAB.LOGIN)} />}
      </div>
    </main>
  );
};

export default SignupPage;
