import { FC } from 'react'
import { PropChildren } from '../../context/contextPosts'

export const Aside: FC<PropChildren> = ({ children, className }) => (
  <aside className={className}> {children}</aside>
)
