import { useState, useEffect } from "react";
import { fetchAPI, PostWithCover } from "./functions/fetchAPI";

import "./App.css";

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
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <img src={post.cover} alt="Cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
