import { useState, useEffect } from "react";
import "./style.scss";

import { fetchAPI, PostWithCover } from "../../functions/fetchAPI";

import { Posts } from "../../component/posts";
import { Button } from "../../component/Button";

function App() {
  const [posts, setPosts] = useState<PostWithCover[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAPI();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
      hshshshshhhsh
      <Button text={"click"} disabled={false} />
    </div>
  );
}

export default App;
