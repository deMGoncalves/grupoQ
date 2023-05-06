import echo from '@grupoq/echo'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const storage = middleware(function (target) {
  function update () {
    const bag = JSON.parse(localStorage.getItem('bag') ?? '{}')
    const products = Object.entries(bag)
    target[storage.onResponse](products)
  }

  echo.on('bag:add', update)
  echo.on('bag:open', update)
  echo.on('bag:remove', update)
})

Object.assign(storage, {
  onResponse: magic.storage_onResponse
})

export default storage
