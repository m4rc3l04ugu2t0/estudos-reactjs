import { FC } from 'react'
import { PropChildren } from '../../context/contextPosts'
import './style.scss'

export const Div: FC<PropChildren> = ({ className, children }) => (
  <div className={className}>{children}</div>
)
