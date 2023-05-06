import h from '@grupoq/h'
import text from '@grupoq/text'

function component (price) {
  return (
    <section>
      <text.Data master dark sm bold>{price.value}</text.Data>
    </section>
  )
}

export default component
