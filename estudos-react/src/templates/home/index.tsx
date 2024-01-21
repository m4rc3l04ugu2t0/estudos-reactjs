import "./style.scss";

import { Posts } from "../../component/posts";
import { PostsProvider } from "../../context/contextPosts";
import { Header } from "../../component/Header";
import { Section } from "../../component/Section";
import { SideBar } from "../../component/SideBar";

function App() {
  return (
    <div className="container">
      <PostsProvider>
        <Header />
        <Section>
          <SideBar />
          <Section>
            <Posts />
          </Section>
        </Section>
      </PostsProvider>
    </div>
  );
}

export default App;
