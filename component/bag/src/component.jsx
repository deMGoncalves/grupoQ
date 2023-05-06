import h from '@grupoq/h'
import Header from './header'
import Shelf from './shelf'
import Side from '@grupoq/side'

function component (bag) {
  return (
    <Side onClose={() => bag.close()} opened={bag.opened}>
      <Header onClose={() => bag.close()} />
      <Shelf>
        {bag.products}
      </Shelf>
    </Side>
  )
}

export default component
