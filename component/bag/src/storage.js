import echo from '@grupoq/echo'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const storage = middleware(function (shelf) {
  echo.on('bag:remove', () => shelf[storage.onResponse](storage.getProducts()))
  shelf[storage.onResponse](storage.getProducts())
})

Object.assign(storage, {
  getProducts () {
    const bag = JSON.parse(localStorage.getItem('bag') ?? '{}')
    const products = Object.entries(bag)
    return products
  },

  onResponse: magic.storage_onResponse
})

export default storage
