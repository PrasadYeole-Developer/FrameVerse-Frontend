"use client";
import useAuth from "@/hooks/useAuth";
import api from "@/lib/api";
import { infoToast } from "@/lib/toasts";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const { isLoading, user } = useAuth();
  const router = useRouter();
  const logoutHandler = async () => {
    await api.post("/auth/logout");
    router.push("/login");
    infoToast("User logged out!");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 0.8, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };
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
        {!isLoading && user ? (
          <button className="cursor-pointer font-bold!" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <>
            <Link href="/login" className="cursor-pointer">
              Login
            </Link>
          </>
        )}
      </nav>
      <TiThMenu
        size={24}
        className="cursor-pointer menu transition-all duration-500 active:scale-70"
        onClick={handleMenu}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ ease: "easeOut", duration: 0.25 }}
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
              {!isLoading && user ? (
                <button
                  className="cursor-pointer font-bold! mt-4! text-xl!"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/register" className="cursor-pointer text-xl!">
                    Register
                  </Link>
                  <Link href="/login" className="cursor-pointer text-xl!">
                    Login
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
