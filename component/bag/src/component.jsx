import Checkout from './checkout'
import h from '@grupoq/h'
import Header from './header'
import Shelf from './shelf'
import Show from '@grupoq/show'
import Side from '@grupoq/side'

function component (bag) {
  return (
    <Side onClose={() => bag.close()} opened={bag.opened}>
      <Header onClose={() => bag.close()} />
      <Shelf>
        {bag.products}
        <Show when={bag.products.length}>
          <Checkout>{bag.total}</Checkout>
        </Show>
      </Shelf>
    </Side>
  )
}

export default component
