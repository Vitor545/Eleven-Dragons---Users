import style from './Users.module.scss'
import Card from '../Card'

export default function TextInfinite() {
  const status_button: string = 'status_button_active'
  return (
    <section className={style.users}>
      <div className='container'>
        <div className={style.users_status}>
          <span>Filtrar por:</span>
          <a className={`${style[status_button]}`}>ATIVO</a>
          <a>INATIVO</a>
        </div>
        <div className={style.card_container}>
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'inactive'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'inactive'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
          <Card
            name={'Vitor Souza da Silva'}
            gender={'male'}
            email={'tutornews2@gmail.com'}
            status={'active'}
          />
        </div>
      </div>
    </section>
  )
}
