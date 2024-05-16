import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogIn() {
  const router = useRouter();
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      alert("please fill all fields");
      return;
    }
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    if (!res?.ok) {
      alert("login failed");
    } else {
      router.push("/user");
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
        <h1 className="text-[32px] sm:text-[40px] text-[#1692EC] font-[600]">Login</h1>
        <hr />
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
        onClick={() => handleLogin()}
        className="justify-center items-center w-[120px] sm:w-[160px] mr-0 ml-auto py-[12px] px-[16px] flex flex-row gap-[10px] bg-[#1692EC] rounded-[4px]"
        type="submit"
      >
        <span className="text-white text-[20px] sm:text-[24px]">Login</span>
      </button>
    </div>
  );
}
