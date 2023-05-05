import h from '@grupoq/h'
import text from '@grupoq/text'

function component (title) {
  return (
    <section>
      <text.H1 master dark md highlight bold>{title.content}</text.H1>
    </section>
  )
}

export default component
