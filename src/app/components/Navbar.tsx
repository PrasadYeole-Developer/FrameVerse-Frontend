"use client";
import React from "react";

const Navbar = () => {
  const postsHandler = () => {
    console.log("Posts clicked");
  };
  const registerHandler = () => {
    console.log("Register clicked");
  };
  const loginHandler = () => {
    console.log("Login clicked");
  };
  return (
    <header className="w-full select-none bg-[#213555] flex items-center justify-between py-8! px-16! border-b border-gray-200">
      <h3 className="text-[1.5rem]!">FrameVerse</h3>
      <nav className="flex gap-8">
        <button className="cursor-pointer" onClick={postsHandler}>
          Posts
        </button>
        <button className="cursor-pointer" onClick={registerHandler}>
          Register
        </button>
        <button className="cursor-pointer" onClick={loginHandler}>
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
