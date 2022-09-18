import style from './Hero.module.scss'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={`container ${style.hero__container}`}>
      <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString('<h1>Os <span>Melhores</span> Usuários</h1>')
                .pauseFor(15000)
                .deleteChars(20)
                .typeString('<h1>As <span>Melhores</span> Pessoas</h1>')
                .pauseFor(15000)
                .deleteChars(19)
                .typeString('<h1>Os <span>Melhores</span> Amigos</h1>')
                .pauseFor(15000)
                .deleteChars(18)
                .start()
            }}
            options={{ loop: true }}
          />
      </div>
    </section>
  )
}
