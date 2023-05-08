import h from '@grupoq/h'
import style from './style'
import text from '@grupoq/text'

function component (_props, children) {
  return (
    <text.Strong className={style.product__title} master dark xxxs medium>{children}</text.Strong>
  )
}

export default component
