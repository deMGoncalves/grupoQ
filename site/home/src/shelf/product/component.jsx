import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'
import text from '@grupoq/text'

function component (product) {
  return (
    <a className={style.product} href={product.url}>
      <Img className={style.product__image} src={product.image} />
      <text.Strong master dark xxxs medium>{product.title}</text.Strong>
      <text.Data master dark xs bold>{product.price}</text.Data>
    </a>
  )
}

export default component
