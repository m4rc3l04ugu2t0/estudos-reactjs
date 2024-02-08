import { ChangeEvent, FC } from 'react'
import './style.scss'

interface PropsInputSearch {
  fnAction: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const InputTypeSearch: FC<PropsInputSearch> = ({
  fnAction,
  className
}) => {
  return (
    <div className="container-search-posts">
      <input
        type="search"
        name="search-posts"
        id="search-posts"
        className={className}
        placeholder="Pesquisar"
        onChange={fnAction}
      />
    </div>
  )
}
