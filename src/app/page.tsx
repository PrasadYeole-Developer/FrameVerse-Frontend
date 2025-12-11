"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const heroText = "Welcome to FrameVerse";
  return (
    <>
      <main className="bg-[#3E5879] min-h-screen w-full">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="home"
        >
          <h1 className="text-2xl! sm:text-3xl! md:text-4xl! lg:text-5xl! xl:text-7xl! font-bold! tracking-wide text-white text-center pt-[15%]!">
            {heroText}
          </h1>
        </motion.div>
      </main>
    </>
  );
}
