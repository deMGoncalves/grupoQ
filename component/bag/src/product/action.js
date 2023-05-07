import echo from '@grupoq/echo'
import interceptor from '@grupoq/interceptor'

const remove = interceptor(function (args, next) {
  setImmediate(() => echo.emit('bag:remove'))
  return next(...args)
})

const update = interceptor(function (args, next) {
  setImmediate(() => echo.emit('bag:update'))
  return next(...args)
})

export default {
  remove,
  update
}
