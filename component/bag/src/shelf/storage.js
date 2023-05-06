import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const storage = middleware(function (shelf) {
  const bag = JSON.parse(localStorage.getItem('bag') ?? '{}')
  const products = Object.entries(bag)
  shelf[storage.onChange](products)
})

Object.assign(storage, {
  onChange: magic.storage_onChange
})

export default storage
