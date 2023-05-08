import echo from '@grupoq/echo'
import interceptor from '@grupoq/interceptor'

const update = interceptor(function (args, next) {
  setImmediate(() => echo.emit('bag:update'))
  return next(...args)
})

export default {
  update
}
