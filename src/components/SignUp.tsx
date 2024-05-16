import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp(props: any) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signup = async (name: string, email: string, password: number | string) => {
    const body = JSON.stringify({
      name,
      email,
      password,
    });
    const response = await fetch(`http://localhost:3001/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    return response;
  };

  const handleSignup = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("please fill all fields");
      return;
    }
    const res = await signup(formData.name, formData.email, formData.password);
    if (!res?.ok) {
      alert("signup failed");
    } else {
      props.onSignup();
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  const handleInput = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full h-full flex flex-col gap-[32px] p-[40px] border-[1px] border-[#C2C2C2] rounded-[8px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[32px] sm:text-[40px] text-[#1692EC] font-[600]">Signup</h1>
        <hr />
        <div className="flex flex-col gap-[16px] w-full">
          <label className="text-[20px] sm:text-[24px] font-[400]">Name</label>
          <input
            className="text-[12px] sm:text-[16px] py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
            type="text"
            name="name"
            onChange={handleInput}
            value={formData.name}
            placeholder="Prach Boonnud"
          />
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <label className="text-[20px] sm:text-[24px] font-[400]">Email</label>
          <input
            className="text-[12px] sm:text-[16px] py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
            type="text"
            name="email"
            onChange={handleInput}
            value={formData.email}
            placeholder="pond@pond.com"
          />
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <label className="text-[20px] sm:text-[24px] font-[400]">Password</label>
          <input
            className="text-[12px] sm:text-[16px] py-[12px] px-[16px] border-[1px] border-[#5C5C5C] rounded-[4px] focus:outline-none focus:border-[#1692EC]"
            type="password"
            name="password"
            onChange={handleInput}
            value={formData.password}
            placeholder="password"
          />
        </div>
      </div>

      <button
        onClick={() => handleSignup()}
        className="justify-center items-center w-[120px] sm:w-[160px] mr-0 ml-auto py-[12px] px-[16px] flex flex-row gap-[10px] bg-[#1692EC] rounded-[4px]"
        type="submit"
      >
        <span className="text-white text-[20px] sm:text-[24px]">Signup</span>
      </button>
    </div>
  );
}
