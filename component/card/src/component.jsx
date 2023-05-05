import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'
import text from '@grupoq/text'

function component (card) {
  return (
    <section className={style.card}>
      <Img className={style.card__image} src={card.image} />
      <text.H1 master dark xxxs medium>{card.title}</text.H1>
      <text.Data master dark xs bold>{card.price}</text.Data>
    </section>
  )
}

export default component
