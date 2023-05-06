import h from '@grupoq/h'
import style from './style'
import text from '@grupoq/text'

function component (price) {
  return (
    <section className={style.price__container}>
      <text.Data master dark sm bold>{price.value}</text.Data>
    </section>
  )
}

export default component
