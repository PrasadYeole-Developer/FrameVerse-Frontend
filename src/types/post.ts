import User from "./user";

type Post = {
  _id: string;
  image: string;
  caption: string;
  user: User;
  __v: number;
};

export default Post;
