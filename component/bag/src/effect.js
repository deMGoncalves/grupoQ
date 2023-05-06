import echo from '@grupoq/echo'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (bag) {
  echo.on('bag:add', () => bag[effect.open]())
  echo.on('bag:open', () => bag[effect.open]())
})

Object.assign(effect, {
  open: magic.bag_open
})

export default effect
