import style from './Users.module.scss'
import Card from '../Card'
import IUser from '../../types/User.interface'
import { useState } from 'react'

export type UserProps = {
  users: IUser[]
}

export default function Users({users}: UserProps) {
  const status_button: string = 'status_button_active'

  return (
    <section className={style.users}>
      <div className="container">
        <div className={style.users_status}>
          <span>Filtrar por:</span>
          <a className={`${style[status_button]}`}>ATIVO</a>
          <a>INATIVO</a>
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
