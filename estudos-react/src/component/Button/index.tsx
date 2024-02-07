import { FC } from 'react'

import './style.scss'

interface MyButtonProps {
  text?: string
  disabled: boolean
  onClick?: () => void
  className?: string
  classNameContainer?: string
}

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
