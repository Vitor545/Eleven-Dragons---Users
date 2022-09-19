import style from './Users.module.scss'
import Card from '../Card'
import IUser from '../../types/User.interface'
import { useState } from 'react'

export type UserProps = {
  users: IUser[]
}

export type isSearchTrueType = {
  false: IUser[]
  inactive: IUser[]
  active: IUser[]
  [key: string]: IUser[]
}

export default function Users({ users }: UserProps) {
  const [isActive, setIsActive] = useState(false)
  const [isInactive, setIsInactive] = useState(false)
  const [isSearch, setIsSearch] = useState('false')

  const filterUsersActive = users.filter((user) => user.status === 'active' || user.status === true)
  const filterUsersInactive = users.filter(
    (user) => user.status === 'inactive' || user.status === false
  )
  const typeButton = [
    { label: 'ATIVO', status: isActive, type: 'active' },
    { label: 'INATIVO', status: isInactive, type: 'inactive' },
  ]
  const isSearchTrue: isSearchTrueType = {
    false: users,
    inactive: filterUsersInactive,
    active: filterUsersActive,
  }
  const usersArray = isSearchTrue[isSearch].map((user: IUser) => (
    <Card
      name={user.name}
      gender={user.gender}
      email={user.email}
      status={user.status}
      key={user.id}
    />
  ))

  const onClick = (type: string) => {
    if (type === 'active') {
      if (isActive) {
        setIsActive(false)
        setIsSearch('false')
      } else {
        setIsActive(true)
        setIsSearch('active')
        setIsInactive(false)
      }
    }
    if (type === 'inactive') {
      if (isInactive) {
        setIsInactive(false)
        setIsSearch('false')
      } else {
        setIsInactive(true)
        setIsSearch('inactive')
        setIsActive(false)
      }
    }
  }

  return (
    <section className={style.users}>
      <div className="container">
        <div className={style.users_status}>
          <span>Filtrar por:</span>
          {typeButton.map((type) => (
            <a
              data-testid={`button_${type.type}_filter`}
              className={
                type.status ? `${style.status_button_active}` : `${style.status_button_inactive}`
              }
              key={type.label}
              onClick={() => onClick(type.type)}
            >
              {type.label}
            </a>
          ))}
        </div>
        <div className={style.card_container}>{usersArray}</div>
      </div>
    </section>
  )
}
