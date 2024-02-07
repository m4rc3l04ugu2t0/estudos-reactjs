import { useQuery } from '@tanstack/react-query'
import { fetchAPI } from '../../functions/fetchAPI'
import './style.scss'

export const Posts = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchAPI
  })

  if (data instanceof Error) {
    return <p>Error: {data.message}</p>
  }

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
