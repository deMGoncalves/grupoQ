import h from '@grupoq/h'
import style from './style'

function component (shelf) {
  return (
    <section className={style.shelf}>
      {shelf.products}
    </section>
  )
}

export default component
