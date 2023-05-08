import interceptor from '@grupoq/interceptor'
import local from '@grupoq/local'

const update = interceptor(function (args, next) {
  const bag = local.bag
  const product = bag[this.id]

  setImmediate(() => (
    (product.count = this.count),
    (local.bag = bag)
  ))

  return next(...args)
})

export default {
  update
}
