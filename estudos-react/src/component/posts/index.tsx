import { useContext } from "react";
import { PostsContext } from "../../context/contextPosts";

export const Posts = () => {
  const { postsPerPage } = useContext(PostsContext);

  return (
    <div>
      {Array.isArray(postsPerPage) ? (
        postsPerPage.map((post) => (
          <div key={post.id}>
            <h1>
              {post.id} {post.title}
            </h1>
            <p>{post.body}</p>
            <img src={post.cover} alt="Cover" />
          </div>
        ))
      ) : (
        <p>
          Error:{" "}
          {postsPerPage instanceof Error
            ? postsPerPage.message
            : "Unknown error"}
        </p>
      )}
    </div>
  );
};
