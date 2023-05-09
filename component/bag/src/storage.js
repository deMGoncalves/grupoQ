import interceptor from '@grupoq/interceptor'
import local from '@grupoq/local'
import magic from '@grupoq/magic'

const storage = {}

const pull = interceptor(function (args, next) {
  const products = Object.values(local.bag ?? {})
  this[storage.onResponse](products)
  return next(...args)
})

const push = interceptor(function (args, next) {
  const [product] = args
  const bag = local.bag
  delete bag[product.id]
  local.bag = bag
  return next(...args)
})

Object.assign(storage, {
  pull,
  push,
  onResponse: magic.storage_onResponse
})

export default storage
