import container from '@grupoq/container'
import h from '@grupoq/h'
import icon from './icon.png'
import Img from '@grupoq/img'
import style from './style'

function component (props) {
  return (
    <header className={style.header}>
      <container.Div>
        <button className={style.header__button} onClick={props.onClose}>
          <Img className={style.header__icon} src={icon} />
        </button>
      </container.Div>
    </header>
  )
}

export default component
