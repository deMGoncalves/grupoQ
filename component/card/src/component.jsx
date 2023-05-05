import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'
import text from '@grupoq/text'

function component (card) {
  return (
    <a className={style.card} href={card.url}>
      <Img className={style.card__image} src={card.image} />
      <text.Strong master dark xxxs medium>{card.title}</text.Strong>
      <text.Data master dark xs bold>{card.price}</text.Data>
    </a>
  )
}

export default component
