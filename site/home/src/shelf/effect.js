import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (shelf) {
  useEffect((products) => shelf[effect.onChange](products), ['products'])
})

Object.assign(effect, {
  onChange: magic.effect_onChange
})

export default effect
