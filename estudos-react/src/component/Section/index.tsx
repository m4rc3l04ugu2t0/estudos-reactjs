import { FC } from 'react'

import './style.scss'
import { ChildrenProps } from '../../props'

export const Section: FC<ChildrenProps> = ({ children, className }) => (
  <section className={className || 'class-default'}>{children}</section>
)
