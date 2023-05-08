import h from '@grupoq/h'
import text from '@grupoq/text'

function component (props) {
  return (
    <text.A onClick={() => props.onClick()} danger dark xxs medium>Remove</text.A>
  )
}

export default component
