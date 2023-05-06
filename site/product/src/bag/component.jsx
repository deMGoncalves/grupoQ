import Button from '@grupoq/button'
import h from '@grupoq/h'
import style from './style'

function component (bag) {
  return (
    <section className={style.bag__container}>
      <Button className={style.bag} onClick={() => bag.add()}>Add to bag</Button>
    </section>
  )
}

export default component
