import { useState, useEffect } from "react";
import "./style.scss";

import { fetchAPI, PostWithCover } from "../../functions/fetchAPI";

import { Posts } from "../../component/posts";
import { Button } from "../../component/Button";
// import { isArray } from "../../functions/isArray";

function App() {
  const [posts, setPosts] = useState<PostWithCover[] | Error>([]);
  const [postsPerPage, setPostsPerPage] = useState<PostWithCover[] | Error>([]);
  const [nextPosts, setNextPosts] = useState<number>(2);

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
      setNextPosts((prevState) => prevState + 2);
      const nextPost = posts.slice(0, nextPosts);

      setPostsPerPage(nextPost);
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
