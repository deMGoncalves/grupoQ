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
      <div className={style.product__tools}>
        <button className={style.product__button} onClick={() => product.sub()}>-</button>
        <text.Span master dark xs bold>{product.count}</text.Span>
        <button className={style.product__button} onClick={() => product.add()}>+</button>
        <text.A onClick={() => product.remove()} danger dark xxs medium>Remove</text.A>
      </div>
    </div>
  )
}

export default component
