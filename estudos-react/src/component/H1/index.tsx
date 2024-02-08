import { Button } from '../Button'
import './style.scss'

export const H1 = () => (
  <div className="container-h1">
    <Button
      className={'bi bi-list'}
      classNameContainer={'container-button-menu'}
      disabled={false}
    />
    <h1>Hello Word</h1>
  </div>
)
