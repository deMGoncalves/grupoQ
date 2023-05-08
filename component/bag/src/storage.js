import echo from '@grupoq/echo'
import interceptor from '@grupoq/interceptor'
import local from '@grupoq/local'
import magic from '@grupoq/magic'
import middleware from '@grupoq/middleware'

const storage = middleware(function (bag) {
  function pull () {
    const products = Object.values(local.bag ?? {})
    bag[storage.onResponse](products)
  }

  echo.on('bag:add', pull)
  echo.on('bag:update', pull)
  echo.on('bag:remove', pull)

  pull()
})

const remove = interceptor(function (args, next) {
  const bag = local.bag
  const [product] = args
  delete bag[product.id]
  local.bag = bag
  return next(...args)
})

Object.assign(storage, {
  remove,
  onResponse: magic.storage_onResponse
})

export default storage
