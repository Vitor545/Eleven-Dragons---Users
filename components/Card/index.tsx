import IUser from '../../types/User.interface'
import style from './Card.module.scss'

export type statusType = {
  inactive: string
  active: string;
  [key: string]: string
}

export default function Text({name, email, status}: IUser) {
  const status_verify: statusType = { inactive: 'INATIVO', active: 'ATIVO' }
  const status_user: string = `status_${status}`

  return (
    <div className={style.card}>
      <div className={style.card_status}>
        <div className={style[status_user]}></div>
        <span>{status_verify[status]}</span>
      </div>
      <div className={style.card_body}>
        <div className={style.card_photo}>{name[0].toUpperCase()}</div>
        <h3 className={style.card_name}>{name}</h3>
        <p className={style.card_email}>{email}</p>
      </div>
    </div>
  )
}
