import h from '@grupoq/h'
import Side from '@grupoq/side'

function component (bag) {
  return (
    <Side onClose={() => bag.close()} opened={bag.opened} />
  )
}

export default component
