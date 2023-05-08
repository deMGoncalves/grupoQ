import h from '@grupoq/h'
import text from '@grupoq/text'

function component (_props, children) {
  return (
    <text.Span master dark xs bold>{children}</text.Span>
  )
}

export default component
