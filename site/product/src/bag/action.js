import echo from '@grupoq/echo'
import interceptor from '@grupoq/interceptor'

const add = interceptor(function (args, next) {
  setImmediate(() => echo.emit('bag:add'))
  return next(...args)
})

export default {
  add
}
