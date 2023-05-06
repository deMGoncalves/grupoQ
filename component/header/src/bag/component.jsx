import h from '@grupoq/h'
import icon from './icon.png'
import Img from '@grupoq/img'
import style from './style'

function component () {
  return (
    <button className={style.bag}>
      <Img className={style.bag__icon} src={icon} />
    </button>
  )
}

export default component
