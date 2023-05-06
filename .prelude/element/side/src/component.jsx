import h, { Fragment } from '@grupoq/h'
import style from './style'

function component (props, children) {
  return (
    <>
      <div className={[style.side, props.className]} opened={props.opened}>
        {children}
      </div>
      <div className={style.side__overlayer} onClick={props.onClose} opened={props.opened} />
    </>
  )
}

export default component
