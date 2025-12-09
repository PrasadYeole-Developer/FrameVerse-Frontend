"use client";
import Link from "next/link";

const Navbar = () => {
  const postsHandler = () => {
    console.log("Posts clicked");
  };
  const createHandler = () => {
    console.log("Create clicked");
  }
  const registerHandler = () => {
    console.log("Register clicked");
  };
  const loginHandler = () => {
    console.log("Login clicked");
  };
  return (
    <header className="w-full select-none bg-[#213555] flex items-center justify-between py-8! px-16! border-b border-gray-200">
      <h3 className="text-[1.5rem]!">
        <Link href="/">FrameVerse</Link>
      </h3>
      <nav className="flex gap-8">
        <Link href="/posts" className="cursor-pointer" onClick={postsHandler}>
          Posts
        </Link>
        <Link
          href="/create"
          className="cursor-pointer"
          onClick={createHandler}
        >
          Create
        </Link>
        <Link
          href="/register"
          className="cursor-pointer"
          onClick={registerHandler}
        >
          Register
        </Link>
        <Link href="/login" className="cursor-pointer" onClick={loginHandler}>
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
