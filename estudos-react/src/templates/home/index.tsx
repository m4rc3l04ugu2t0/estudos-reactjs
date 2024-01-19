import { useState, useEffect } from "react";
import "./style.scss";

import { fetchAPI, PostWithCover } from "../../functions/fetchAPI";

import { Posts } from "../../component/posts";
import { Button } from "../../component/Button";
// import { isArray } from "../../functions/isArray";

function App() {
  const [posts, setPosts] = useState<PostWithCover[] | Error>([]);
  const [postsPerPage, setPostsPerPage] = useState<PostWithCover[] | Error>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAPI();

      if (data instanceof Error) {
        console.log(data.message);
      } else {
        setPosts(data);
      }
    };

    fetchData();
  }, []);

  const loadMorePosts = () => {
    if (Array.isArray(posts)) {
      const nextPosts = posts.slice(0, 2);
      setPostsPerPage(nextPosts);
    }
  };

  return (
    <div className="container">
      {Array.isArray(postsPerPage) ? (
        postsPerPage.map((post) => <Posts key={post.id} post={post} />)
      ) : (
        <p>Error: {posts instanceof Error ? posts.message : "Unknown error"}</p>
      )}
      hshshshshhhsh
      <Button text={"click"} disabled={false} onClick={loadMorePosts} />
    </div>
  );
}

export default App;
