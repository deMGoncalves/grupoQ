import container from '@grupoq/container'
import h from '@grupoq/h'
import style from './style'

function component (_props, children) {
  return (
    <main className={style.product__main}>
      <container.Div>
        {children}
      </container.Div>
    </main>
  )
}

export default component
