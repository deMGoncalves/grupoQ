import container from '@grupoq/container'
import h from '@grupoq/h'
import Metro from '@grupoq/metro'
import style from './style'

function component (breadcrumb) {
  return (
    <section className={style.breadcrumb}>
      <container.Nav>
        <Metro>
          {breadcrumb.paths}
        </Metro>
      </container.Nav>
    </section>
  )
}

export default component
