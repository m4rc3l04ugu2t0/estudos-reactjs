import { FC } from 'react'
import './style.scss'
import { ChildrenProps } from '../../props'

export const Div: FC<ChildrenProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
)
