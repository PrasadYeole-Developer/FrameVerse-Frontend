import Post from "@/types/post";
import Image from "next/image";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col justify-center items-start rounded py-12 px-6 w-48">
      <Image src={post.image} width={200} height={200} alt="FrameVerse Post" />
      <p>{post.caption}</p>
      <p>{post.user.username}</p>
    </div>
  );
};

export default PostCard;
