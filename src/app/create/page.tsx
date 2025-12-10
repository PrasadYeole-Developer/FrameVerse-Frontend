"use client";
import Navbar from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const Create = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
      alert("Please login to create a post");
      return;
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="bg-[#3E5879] min-h-screen w-full">
        <Navbar />
        <div className="home">
          <h1 className="text-xl! sm:text-2xl! md:text-3xl! lg:text-3xl! xl:text-4xl! font-bold! tracking-wide text-white text-center pt-[15%]!">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

  if (!isLoading && !user) return null;

  const createHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    setLoading(true);

    try {
      await api.post("/api/posts", formData);
      router.push("/posts");
      alert("Post created successfully");
      setImage(null);
    } catch (err) {
      console.log(err);
      alert("Error creating post");
    }
    setLoading(false);
  };
  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <div className="bg-[#3E5879] min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-12!">
        <form
          className="flex flex-col gap-4 bg-[#D8C4B6] p-8! rounded-xs shadow-md w-lg"
          onSubmit={createHandler}
        >
          <h2 className="text-[#213555] font-bold! text-center!">
            Create New Post
          </h2>
          <label
            htmlFor="image"
            className="py-4! px-6! outline-none bg-[#F5EFE7] text-[#213555]! font-medium! cursor-pointer flex items-center justify-center gap-2"
          >
            <FaFileUpload size={18} />
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="text-sm! w-full! text-[#213555]! font-medium!"
            required={true}
            accept="image/*"
            onChange={selectFile}
          />
          <button
            disabled={loading}
            className="font-semibold! rounded-4xl cursor-pointer bg-[#213555]! transition-colors duration-500 hover:bg-black! py-4! disabled:opacity-80 disabled:cursor-none"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
