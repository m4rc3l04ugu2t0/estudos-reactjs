import "./style.scss";

import { Posts } from "../../component/posts";
import { Button } from "../../component/Button";
import { PostsProvider } from "../../context/contextPosts";
import { Header } from "../../component/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <PostsProvider>
        <Posts />
        <Button text={"click"} disabled={false} />
      </PostsProvider>
    </div>
  );
}

export default App;
