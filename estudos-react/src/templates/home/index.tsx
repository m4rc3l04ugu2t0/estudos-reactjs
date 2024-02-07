import './style.scss'

import { Posts } from '../../component/posts'
import { PostsProvider } from '../../context/contextPosts'
import { Header } from '../../component/Header'
import { Section } from '../../component/Section'
import { SideBar } from '../../component/SideBar'
import { Div } from '../../component/div'

function App() {
  return (
    <PostsProvider>
      <Header />
      <Div className="grid">
        <SideBar />
        <Section className="container-section-posts">
          <Posts />
        </Section>
      </Div>
    </PostsProvider>
  )
}

export default App
