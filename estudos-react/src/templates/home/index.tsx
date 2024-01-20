import "./style.scss";

import { Posts } from "../../component/posts";
import { Button } from "../../component/Button";
import { PostsProvider } from "../../context/contextPosts";

function App() {
  return (
    <div className="container">
      <PostsProvider>
        <Posts />
        <Button text={"click"} disabled={false} />
      </PostsProvider>
    </div>
  );
}

export default App;
