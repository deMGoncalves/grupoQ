import container from '@grupoq/container'
import h from '@grupoq/h'
import Metro from '@grupoq/metro'

function component (breadcrumb) {
  return (
    <section>
      <container.Nav>
        <Metro>
          {breadcrumb.paths}
        </Metro>
      </container.Nav>
    </section>
  )
}

export default component
