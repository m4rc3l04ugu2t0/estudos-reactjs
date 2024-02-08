import { createContext, useEffect, useState, ReactNode } from 'react'
import { PostWithCover, fetchAPI } from '../../services/fetchAPI'
import { PropsClassName } from '../../interfaces/PropsClassName'
import { useQuery } from '@tanstack/react-query'

const PostsContext = createContext(defaultContextValue)

const PostsProvider: React.FC<PropChildren> = ({ children }) => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchAPI
  })

  if (data instanceof Error) {
    return <p>Error: {data.message}</p>
  }

  return (
    <PostsContext.Provider value={{ data }}>{children}</PostsContext.Provider>
  )
}

export { PostsProvider, PostsContext }
