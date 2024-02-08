// import { useQuery } from '@tanstack/react-query'
// import { fetchAPI } from '../../services/fetchAPI'
import './style.scss'
import { useContext } from 'react'
import { PostsContext } from '../../context/contextPosts'

export const Posts = () => {
  const data = useContext(PostsContext)

  console.log(data)
  return (
    <>
      {Array.isArray(data) ? (
        data.map((post) => (
          <div key={post.id} className="posts">
            <h1>
              {post.id} {post.title}
            </h1>
            <p>{post.body}</p>
            <img src={post.cover} alt="Cover" />
          </div>
        ))
      ) : (
        <p>Error</p>
      )}
    </>
  )
}
