import { FC } from 'react'

import './style.scss'
import { MyButtonProps } from '../../props'

export const Button: FC<MyButtonProps> = ({
  text,
  disabled,
  onClick,
  className,
  classNameContainer
}) => {
  return (
    <div className={classNameContainer}>
      <button className={className} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  )
}
