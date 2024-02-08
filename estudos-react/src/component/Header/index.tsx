import './style.scss'
import { InputTypeSearch } from '../InputTypeSearch'
import { Button } from '../Button'
import { H1 } from '../H1'
import { mutationPosts } from '../../services/muationPosts'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient'

export const Header = () => {
  const mutation = useMutation({
    mutationFn: mutationPosts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })

  return (
    <header>
      <H1 />
      <InputTypeSearch />
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
