import echo from '@grupoq/echo'
import magic from '@grupoq/magic'
import middleware from '@grupoq/middleware'

const effect = middleware((title) => (
  echo.on('markup:setTitle', ({ content }) => title[effect.onChange](content))
))

Object.assign(effect, {
  onChange: magic.effect_onChange
})

export default effect
