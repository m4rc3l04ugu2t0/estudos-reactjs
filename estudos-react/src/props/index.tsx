export interface PostsProps {
  id: string
  title: string
  body: string
  cover?: string
  description: string
  userId: number
  author: string
  date: string
}
export interface PhotoProps {
  albumId: number
  id: string
  title: string
  url: string
  thumbnailUrl: string
}

export interface ChildrenProps {
  children: React.ReactNode
  className?: string
  className2?: string
}

export interface MyButtonProps {
  text?: string
  disabled: boolean
  onClick?: () => void
  className?: string
  classNameContainer?: string
}
