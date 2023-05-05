import h from '@grupoq/h'
import text from '@grupoq/text'

function component (description) {
  return (
    <section>
      <text.P master xxxs>{description.content}</text.P>
    </section>
  )
}

export default component
