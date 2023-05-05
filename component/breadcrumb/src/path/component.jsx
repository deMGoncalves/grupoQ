import h, { Fragment } from '@grupoq/h'
import Show from '@grupoq/show'
import text from '@grupoq/text'

function component (path) {
  return (
  <>
    <Show when={path.index}>
      <text.Span master xxxs bold>/</text.Span>
    </Show>
    <text.A master xxxs href={path.href}>{path.title}</text.A>
  </>
  )
}

export default component
