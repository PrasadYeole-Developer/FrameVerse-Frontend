"use client";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import api from "@/lib/api";
import Post from "@/types/post";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6933262d8515db7431c2dc1a",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/76749348-a3e3-4699-ba3a-b0dc040cc890-testSocialMediaApp_Ey8ASPe3l.png",
      caption: "Masked in green.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "6935498b32e16942c12ec7a6",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/socialApp.png_910c4eff-a20d-4714-bab1-a0d1c97ca396_oIyXBlQCME",
      caption:
        'A friendly anime-style man with glasses and a goatee smiles in a "NEW" shirt.',
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
    {
      _id: "69385598e25f24e808b2c13d",
      image:
        "https://ik.imagekit.io/PrasadYeole/socialMediaProjectImages/testFrameVerse.png_4bb335bd-0f0e-4982-b7ae-33ac8745d631_b6PnZeSMq",
      caption:
        "A casually dressed anime man takes a mirror selfie in his green-walled room.",
      user: {
        _id: "693324c37f576a62632db0f6",
        username: "prasadyeole",
      },
      __v: 0,
    },
  ]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await api.get("/api/posts");
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
        alert("Error fetching posts");
      }
    };
    getPosts();
  }, []);
  return (
    <div className="bg-[#3E5879] min-h-screen w-full">
      <Navbar />
      <div className="mt-12! px-12! max-w-full flex flex-wrap gap-8 justify-center items-start">
        {posts.map((data) => (
          <PostCard key={data._id} post={data} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
