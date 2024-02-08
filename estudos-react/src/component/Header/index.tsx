import './style.scss'
import { InputTypeSearch } from '../InputTypeSearch'
import { Button } from '../Button'
import { H1 } from '../H1'
import { mutationPosts } from '../../services/muationPosts'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient'
import { useContext, useState } from 'react'
import { PostsContext } from '../../context/contextPosts'
import { PostWithCover } from '../../services/fetchAPI'

export const Header = () => {
  const [search, setSearch] = useState<string>('')

  const data = useContext<PostWithCover[] | undefined>(PostsContext)

  const mutation = useMutation({
    mutationFn: mutationPosts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })

  const postsFiltered = data?.filter((post) => post.title.includes(search))

  // const searchPosts = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target
  //   setPostsFiltered(data?.filter((post) => post.title.includes(value)))
  // }

  if (!postsFiltered) {
    return <p>Error</p>
  }

  console.log(postsFiltered[0].title)

  return (
    <header>
      <H1 />
      <InputTypeSearch fnAction={(e) => setSearch(e.target.value)} />
      <Button
        text={'click'}
        className="btn-load-more"
        disabled={false}
        onClick={() => {
          mutation.mutate({
            id: '44',
            title: 'Do Laundry'
          })
        }}
      />
    </header>
  )
}
