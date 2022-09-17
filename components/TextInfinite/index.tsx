import style from './TextInfinite.module.scss'
import Text from '../Text'

export default function TextInfinite() {
  return (
    <section className={style.text_infinite}>
      <div className={`${style.scroll} ${style.text_one}`}>
        <div>
          <Text />
        </div>
        <div>
          <Text />
        </div>
      </div>
    </section>
  )
}
