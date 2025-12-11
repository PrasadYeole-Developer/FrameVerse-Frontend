"use client";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { errorToast, successToast } from "@/lib/toasts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { username, password };
      await api.post("/auth/login", data);
      router.push("/create");
      setUsername("");
      setPassword("");
      successToast("Login successful!");
    } catch (err) {
      console.log(err);
      errorToast("Login failed. Please check your credentials and try again.");
    }
    setLoading(false);
  };
  return (
    <div className="bg-[#3E5879] min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-12!">
        <form
          className="flex flex-col gap-4 bg-[#D8C4B6] p-8! rounded-xs shadow-md w-sm sm:w-md md:w-lg"
          onSubmit={loginHandler}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required={true}
            onChange={(val) => {
              setUsername(val.target.value);
            }}
            className="py-4! px-6! outline-none bg-[#F5EFE7] text-[#213555]! font-medium!"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            required={true}
            onChange={(val) => {
              setPassword(val.target.value);
            }}
            className="py-4! px-6! outline-none bg-[#F5EFE7] text-[#213555]! font-medium!"
          />
          <button
            disabled={loading}
            className="font-semibold! rounded-4xl cursor-pointer bg-[#213555]! transition-colors duration-500 hover:bg-black! py-4! disabled:opacity-80 disabled:cursor-none"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <p className="text-[#213555] text-center font-medium!">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="hover:underline! font-bold!">
              Register
            </Link>
          </p>
        </form>
      </div>{" "}
    </div>
  );
};
export default Login;
