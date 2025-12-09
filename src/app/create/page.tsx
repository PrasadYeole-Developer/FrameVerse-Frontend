"use client";
import Navbar from "@/components/Navbar";

const Create = () => {
  const createHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#3E5879] min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-12!">
        <form
          className="flex flex-col gap-4 bg-[#D8C4B6] p-8! rounded-xs shadow-md w-lg"
          onSubmit={createHandler}
        >
          <input
            type="file"
            name="image"
            placeholder=""
            className="py-4! px-6! outline-none bg-[#F5EFE7] text-[#213555]! font-medium! cursor-pointer"
          />
          <button className="font-semibold! rounded-4xl cursor-pointer bg-[#213555]! transition-colors duration-500 hover:bg-black! py-4!">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
