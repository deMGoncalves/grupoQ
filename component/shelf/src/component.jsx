import h from '@grupoq/h'
import style from './style'

function component (_props, children) {
  return (
    <div className={style.shelf}>
      {children}
    </div>
  )
}

export default component
