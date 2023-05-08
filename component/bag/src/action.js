import echo from '@grupoq/echo'
import interceptor from '@grupoq/interceptor'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const action = middleware(function (bag) {
  echo.on('bag:add', () => bag[action.open]())
  echo.on('bag:open', () => bag[action.open]())
})

const remove = interceptor(function (args, next) {
  setImmediate(() => echo.emit('bag:remove'))
  return next(...args)
})

Object.assign(action, {
  remove,
  open: magic.bag_open
})

export default action
