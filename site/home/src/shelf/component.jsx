import h from '@grupoq/h'
import style from './style'

function component (shelf) {
  return (
    <div className={style.shelf}>
      {shelf.products}
    </div>
  )
}

export default component
