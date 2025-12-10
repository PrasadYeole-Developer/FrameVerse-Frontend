"use client";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import useAuth from "@/hooks/useAuth";
import api from "@/lib/api";
import { errorToast, infoToast } from "@/lib/toasts";
import Post from "@/types/post";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Posts = () => {
  const { isLoading, user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
      infoToast("Please login to see the posts");
      return;
    }
  }, [isLoading, user, router]);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (!isLoading && user) {
      const getPosts = async () => {
        try {
          const res = await api.get("/api/posts");
          setPosts(res.data.posts);
        } catch (err) {
          console.log(err);
          errorToast("Error fetching posts");
        }
      };
      getPosts();
    }
  }, [isLoading, user]);

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

  if (!isLoading && !user)
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

  return (
    <div className="bg-[#3E5879] min-h-screen w-full">
      <Navbar />
      <div className="mt-12! px-12! pb-12! max-w-full flex flex-wrap gap-16 justify-center items-start">
        {posts.map((data) => (
          <PostCard key={data._id} post={data} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
