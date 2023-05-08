import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'

function component (props) {
  return (
    <Img className={style.product__image} src={props.src} />
  )
}

export default component
