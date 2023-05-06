import Badge from '@grupoq/badge'
import h from '@grupoq/h'
import icon from './icon.png'
import Img from '@grupoq/img'
import Show from '@grupoq/show'
import style from './style'

function component (bag) {
  return (
    <button className={style.bag} onClick={() => bag.open()}>
      <Img className={style.bag__icon} src={icon} />
      <Show when={bag.count}>
        <Badge className={style.bag__count}>{bag.count}</Badge>
      </Show>
    </button>
  )
}

export default component
