import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'
import text from '@grupoq/text'

function component (product) {
  return (
    <div className={style.product}>
      <Img className={style.product__image} src={product.image} />
      <text.Strong className={style.product__title} master dark xxxs medium>{product.title}</text.Strong>
      <text.Data className={style.product__price} master dark xs bold>{product.price}</text.Data>
      <text.A className={style.product__remove} onClick={() => product.remove()} danger dark xxs medium>Remove</text.A>
    </div>
  )
}

export default component
