import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'

function component (card) {
  return (
    <section className={style.card}>
      <Img className={style.card__img} src={card.image} />
    </section>
  )
}

export default component
