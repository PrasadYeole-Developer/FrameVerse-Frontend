"use client";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { errorToast, successToast } from "@/lib/toasts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { username, password };
      await api.post("/auth/register", data);
      router.push("/login");
      setUsername("");
      setPassword("");
      successToast("Registration successful! Please login.");
    } catch (err) {
      console.log(err);
      errorToast(
        "Registration failed. Please check your credentials and try again."
      );
    }
    setLoading(false);
  };
  return (
    <div className="bg-[#3E5879] min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-12!">
        <form
          className="flex flex-col gap-4 bg-[#D8C4B6] p-8! rounded-xs shadow-md w-sm sm:w-md md:w-lg"
          onSubmit={registerHandler}
        >
          <input
            type="text"
            name="username"
            value={username}
            required={true}
            placeholder="Username"
            onChange={(val) => {
              setUsername(val.target.value);
            }}
            className="py-4! px-6! outline-none bg-[#F5EFE7] text-[#213555]! font-medium!"
          />
          <input
            type="password"
            name="password"
            value={password}
            required={true}
            placeholder="Password"
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
            Already have an account?{" "}
            <Link href="/login" className="hover:underline! font-bold!">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
