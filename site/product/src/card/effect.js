import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (card) {
  useEffect((product) => card[effect.onChange](product), ['product'])
})

Object.assign(effect, {
  onChange: magic.card_onChange
})

export default effect
