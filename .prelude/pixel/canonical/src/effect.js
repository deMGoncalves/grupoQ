import echo from '@grupoq/echo'
import magic from '@grupoq/magic'
import middleware from '@grupoq/middleware'

const effect = middleware((canonical) => (
  echo.on('markup:setCanonical', ({ href }) => canonical[effect.onChange](href))
))

Object.assign(effect, {
  onChange: magic.effect_onChange
})

export default effect
