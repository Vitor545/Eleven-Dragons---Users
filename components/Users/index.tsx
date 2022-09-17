import style from './Users.module.scss'
import Card from '../Card'
import IUser from '../../types/User.interface'
import { useState } from 'react'

export type UserProps = {
  users: IUser[]
}

export default function Users({users}: UserProps) {
  const [isActive, setIsActive] = useState(false)
  const [isInactive, setIsInactive] = useState(false)
  const status_button: string = 'status_button_active'

  const onClick = (type: string) => {
    if(type === 'active') {
      if(isActive) {
        setIsActive(false)
      } else {
        setIsActive(true)
        setIsInactive(false)
      }
    } else {
      if(isInactive) {
        setIsInactive(false)
      } else {
        setIsInactive(true)
        setIsActive(false)
      }
    }
  }

  return (
    <section className={style.users}>
      <div className="container">
        <div className={style.users_status}>
          <span>Filtrar por:</span>
          <a className={isActive && `${style[status_button]}`} onClick={() => onClick('active')}>ATIVO</a>
          <a className={isInactive && `${style[status_button]}`} onClick={() => onClick('inactive')}>INATIVO</a>
        </div>
        <div className={style.card_container}>
          {users.map((user: IUser) => (
            <Card
              name={user.name}
              gender={user.gender}
              email={user.email}
              status={user.status}
              key={user.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
