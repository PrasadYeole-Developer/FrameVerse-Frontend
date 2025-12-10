"use client";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="w-full select-none bg-[#213555] flex items-center justify-between py-8! px-16! border-b border-gray-200">
      <h3 className="text-[1.5rem]!">
        <Link href="/">FrameVerse</Link>
      </h3>
      <nav className="flex gap-8">
        <Link href="/posts" className="cursor-pointer">
          Posts
        </Link>
        <Link href="/create" className="cursor-pointer">
          Create
        </Link>
        <Link href="/register" className="cursor-pointer">
          Register
        </Link>
        <Link href="/login" className="cursor-pointer">
          Login
        </Link>
      </nav>
      <TiThMenu
        size={24}
        className="cursor-pointer menu transition-all duration-500 active:scale-70"
        onClick={handleMenu}
      />
      {isMenuOpen && (
        <div
          className={`flex flex-col bg-[#213555] transition-all duration-500 w-full h-screen gap-4 absolute top-0 right-0 ${
            isMenuOpen ? "opacity-80" : "opacity-0"
          }`}
        >
          <ImCross
            size={24}
            className="cursor-pointer transition-all duration-500 active:scale-70 absolute top-10 right-16"
            onClick={closeMenu}
          />
          <div className="py-32! px-16! flex flex-col gap-6">
            <Link href="/posts" className="cursor-pointer text-xl!">
              Posts
            </Link>
            <Link href="/create" className="cursor-pointer text-xl!">
              Create
            </Link>
            <Link href="/register" className="cursor-pointer text-xl!">
              Register
            </Link>
            <Link href="/login" className="cursor-pointer text-xl!">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
