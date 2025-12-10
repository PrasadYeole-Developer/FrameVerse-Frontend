"use client";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="bg-[#3E5879] min-h-screen w-full">
        <Navbar />
        <div className="home">
          <h1 className="text-2xl! sm:text-3xl! md:text-4xl! lg:text-5xl! xl:text-7xl! font-bold! tracking-wide text-white text-center pt-[15%]!">
            Welcome to FrameVerse
          </h1>
        </div>
      </main>
    </>
  );
}
