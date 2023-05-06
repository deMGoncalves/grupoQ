import Button from '@grupoq/button'
import h from '@grupoq/h'
import style from './style'

function component (card) {
  return (
    <section className={style.card__container}>
      <Button className={style.card} onClick={() => card.add()}>Add to Card</Button>
    </section>
  )
}

export default component
