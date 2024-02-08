import { createContext, FC } from 'react'
import { fetchAPI, PostWithCover } from '../../services/fetchAPI'
import { useQuery } from '@tanstack/react-query'
import { ChildrenProps } from '../../props'

const PostsContext = createContext<PostWithCover[] | undefined>([])

const PostsProvider: FC<ChildrenProps> = ({ children }) => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchAPI
  })

  if (data instanceof Error) {
    return <p>Error: {data.message}</p>
  }

  console.log(data)

  return <PostsContext.Provider value={data}>{children}</PostsContext.Provider>
}

export { PostsProvider, PostsContext }
