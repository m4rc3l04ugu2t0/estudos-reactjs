import { useState, useEffect } from "react";
import "./style.scss";

import { fetchAPI, PostWithCover } from "../../functions/fetchAPI";

import { Posts } from "../../component/posts";
import { Button } from "../../component/Button";

function App() {
  const [posts, setPosts] = useState<PostWithCover[] | Error>([]);

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
    const postsPerPage = posts.slice(0, 2);

    return postsPerPage;
  };

  return (
    <div className="container">
      {Array.isArray(posts) ? (
        posts.map((post) => <Posts key={post.id} post={post} />)
      ) : (
        <p>Error: {posts.message}</p>
      )}
      hshshshshhhsh
      <Button text={"click"} disabled={false} onClick={loadMorePosts} />
    </div>
  );
}

export default App;
