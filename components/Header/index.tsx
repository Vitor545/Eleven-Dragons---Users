import Router from 'next/router'
import style from './Header.module.scss'
import Typewriter from 'typewriter-effect'

export type HeaderProps = {
  onChange?: (value: string) => void
  typeButton?: string
}

export default function Header({ onChange, typeButton = 'Criar Usuário' }: HeaderProps) {
  const onClick = () => {
    if (typeButton === 'Criar Usuário') {
      Router.push('/create')
    } else {
      Router.push('/')
    }
  }
  return (
    <header className={style.header}>
      <div className={`container ${style.header__container}`}>
        <div className={style.header_logo}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={style.circle_logo}
              d="M24 2.86102e-06C27.1517 2.86102e-06 30.2726 0.62078 33.1844 1.8269C36.0962 3.03301 38.742 4.80083 40.9706 7.02944C43.1992 9.25805 44.967 11.9038 46.1731 14.8156C47.3792 17.7274 48 20.8483 48 24C48 27.1517 47.3792 30.2726 46.1731 33.1844C44.967 36.0962 43.1992 38.742 40.9706 40.9706C38.742 43.1992 36.0962 44.967 33.1844 46.1731C30.2726 47.3792 27.1517 48 24 48L24 24L24 2.86102e-06Z"
              fill="white"
            />
          </svg>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString('<h3>Pessoas</h3>')
                .pauseFor(1000)
                .deleteChars(7)
                .typeString('<h3>Amigos</h3>')
                .pauseFor(1000)
                .deleteChars(6)
                .typeString('<h3>Usuários</h3>')
                .pauseFor(1000)
                .deleteChars(8)
                .start()
            }}
            options={{ loop: true }}
          />
        </div>
        <div
          className={`${style.header_content} ${style.header_justify}`}
          style={{ justifyContent: (typeButton === 'Início' ? 'flex-end' : 'space-around') }}
        >
          {onChange && (
            <div className={style.header_search}>
              <input
                type="text"
                onChange={(e) => onChange(e.target.value)}
                placeholder="Quem você está procurando?"
              />
            </div>
          )}
          <a className={style.header_button} onClick={onClick}>
            {typeButton}
          </a>
        </div>
      </div>
    </header>
  )
}
