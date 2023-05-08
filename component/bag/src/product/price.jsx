import h from '@grupoq/h'
import style from './style'
import text from '@grupoq/text'

function component (_props, children) {
  return (
    <text.Data className={style.product__price} master dark xs bold>{children}</text.Data>
  )
}

export default component
