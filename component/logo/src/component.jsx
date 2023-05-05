import { urlFor } from '@grupoq/router'
import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'
import grupoQ from './grupoQ.png'

function component () {
  return (
    <Img slot='leading' className={style.logo} src={grupoQ} onClick={() => location.assign(urlFor('home'))} />
  )
}

export default component
