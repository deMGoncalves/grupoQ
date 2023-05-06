import echo from '@grupoq/echo'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (bag) {
  echo.on('bag:add', () => bag[effect.onChange]())
  echo.on('bag:remove', () => bag[effect.onChange]())
})

Object.assign(effect, {
  onChange: magic.bag_onChange
})

export default effect
