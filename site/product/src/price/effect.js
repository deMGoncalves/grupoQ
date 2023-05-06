import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (price) {
  useEffect((product) => price[effect.onChange](product), ['product'])
})

Object.assign(effect, {
  onChange: magic.price_onChange
})

export default effect
