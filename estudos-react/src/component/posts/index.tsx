import { FC } from "react";
import { PostWithCover } from "../../functions/fetchAPI";

interface PostProps {
  post: PostWithCover;
}

export const Posts: FC<PostProps> = ({ post }) => (
  <div>
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <img src={post.cover} alt="Cover" />
    </div>
  </div>
);
