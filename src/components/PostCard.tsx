import Image from "next/image";

type Post = {
  _id: string;
  image: string;
  caption: string;
  user: {
    _id: string;
    username: string;
  };
  __V: number;
};

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
