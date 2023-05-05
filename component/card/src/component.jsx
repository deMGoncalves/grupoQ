import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'
import text from '@grupoq/text'

function component (card) {
  return (
    <section className={style.card}>
      <Img className={style.card__image} src={card.image} />
      <text.Strong master dark xxs medium>{card.title}</text.Strong>
    </section>
  )
}

export default component
