import style from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={`container ${style.hero__container}`}>
        <h1>Os <span>Melhores</span> Usuários</h1>
      </div>
    </section>
  )
}
