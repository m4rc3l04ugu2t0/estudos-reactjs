import "./style.scss";

import { Posts } from "../../component/posts";
import { PostsProvider } from "../../context/contextPosts";
import { Header } from "../../component/Header";

function App() {
  return (
    <div className="container">
      <PostsProvider>
        <Header />
        <Posts />
      </PostsProvider>
    </div>
  );
}

export default App;
