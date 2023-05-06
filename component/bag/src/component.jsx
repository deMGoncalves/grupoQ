import h from '@grupoq/h'
import Header from './header'
import Side from '@grupoq/side'

function component (bag) {
  return (
    <Side onClose={() => bag.close()} opened={bag.opened}>
      <Header onClose={() => bag.close()} />
    </Side>
  )
}

export default component
