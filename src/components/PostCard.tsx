import Post from "@/types/post";
import Image from "next/image";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="group hover:scale-105 rounded flex flex-col justify-center items-start py-12 px-6 w-64 border-8! border-white! transition-all duration-500 hover:shadow-lg! overflow-hidden">
      <Image
        src={post.image}
        width={200}
        height={200}
        className="w-full group-hover:scale-105 transition-transform duration-500"
        alt="FrameVerse Post"
      />
      <div className="flex flex-col justify-center items-start p-4! group-hover:pt-6! transition-discrete duration-500">
        <p className="line-clamp-1">{post.caption}</p>
        <p className="mt-2! cursor-pointer text-[#F5EFE7] font-semibold! transition-colors duration-500 hover:text-[#D8C4B6]">
          {post.user.username}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
