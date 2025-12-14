"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { mockAccounts } from "../mockData/MockData";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Spinner icon

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Simulate a loading delay
    setTimeout(() => {
      const userAccount = mockAccounts.find(
        (account) => account.holder.username === username
      );

      if (!userAccount) {
        setError("User not found");
        setLoading(false);
        return;
      }

      if (userAccount.holder.password !== password) {
        setError("Invalid password");
        setLoading(false);
        return;
      }

      localStorage.setItem("loggedInUser", JSON.stringify(userAccount));
      router.push("/dashboard");
    }, 2000); // 2 seconds loading
  };

  return (
    <div className="">
      <div className="h-screen bg-white">
        <div className="pt-5">
          <div className="bg-white mx-auto rounded-xl max-w-[500px] p-7">
            <div className="mb-2">
              <Image src="https://i.imgur.com/ycLvEXz.png" width={100} height={100} className="w-[80%]" alt="logo" />
            </div>
            {error && <p className="text-[20px] my-4 text-center mx-auto max-w-[200px] rounded-md min-h-[50px] flex items-center justify-center text-[#000000]">{error}</p>}
            <div className="bg-[#7A7A7A] text-white leading-[45px] pl-[15px] mt-5">Log on to NetBank</div>
            <form onSubmit={handleLogin} className="bg-[#F4F4F4] pl-[15px] sm:pl-0 py-5 pr-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="w-full sm:w-[30%] text-left sm:text-right">
                    <label htmlFor="Client number" className="text-[#000000] text-[16px]">
                      Client username
                    </label>
                  </div>
                  <input type="text" value={username} className="p-2 border border-[#969696] text-[#5c5c5c] w-full sm:w-[70%]" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="sw-full sm:w-[30%] text-left sm:text-right">
                    <label htmlFor="password" className="text-[#000000] text-[16px]">
                      Password
                    </label>
                  </div>

                  <input type="password" value={password} className="p-2 border border-[#969696] text-[#5c5c5c] w-full sm:w-[70%]" onChange={e => setPassword(e.target.value)} />
                </div>
              </div>

              <div className="flex items-end justify-end mt-6">
                <div className="flex items-end justify-end mt-6">
                  <button type="submit" className="p-3 bg-[#fcc30f] text-[15px] w-[150px] font-semibold rounded-[50px] text-[#000000] flex items-center justify-center gap-2" disabled={loading}>
                    {loading ? (
                      <>
                        <AiOutlineLoading3Quarters className="animate-spin" size={18} />
                        Loading...
                      </>
                    ) : (
                      'Log on'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
