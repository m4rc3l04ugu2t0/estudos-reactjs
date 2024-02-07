import './style.scss'

import { useContext } from 'react'
import { PostsContext } from '../../context/contextPosts'

import { InputTypeSearch } from '../InputTypeSearch'
import { Button } from '../Button'
import { H1 } from '../H1'

export const Header = () => {
  const { loadMorePosts } = useContext(PostsContext)

  return (
    <header>
      <H1 />
      <InputTypeSearch />
      <Button
        text={'click'}
        className="btn-load-more"
        disabled={false}
        onClick={loadMorePosts}
      />
    </header>
  )
}
