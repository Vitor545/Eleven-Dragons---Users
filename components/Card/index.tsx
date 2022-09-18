import IUser from '../../types/User.interface'
import style from './Card.module.scss'

export type statusType = {
  inactive: string
  active: string;
  [key: string]: string
}

export default function Text({name, email, status}: IUser) {
  const status_verify: statusType = { inactive: 'INATIVO', active: 'ATIVO', false: 'INATIVO', true: 'ATIVO' }
  const statusUser: string = `status_${status}`
  const randomColor: string = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`

  return (
    <div className={style.card}>
      <div className={style.card_status}>
        <div className={style[statusUser]}></div>
        <span>{status_verify[status as any]}</span>
      </div>
      <div className={style.card_body}>
        <div
          className={style.card_photo}
          style={{backgroundColor: randomColor}}
        >
          {name[0].toUpperCase()}
        </div>
        <h3 className={style.card_name}>{name}</h3>
        <p className={style.card_email}>{email}</p>
      </div>
    </div>
  )
}
