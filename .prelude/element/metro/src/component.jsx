import h from '@grupoq/h'
import style from './style'

function component (_metro, children) {
  return (
    <div className={style.metro}>
      <div className={style.metro__container}>
        {children}
      </div>
    </div>
  )
}

export default component
