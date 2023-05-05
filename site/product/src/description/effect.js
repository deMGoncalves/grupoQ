import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (description) {
  useEffect((product) => description[effect.onChange](product), ['product'])
})

Object.assign(effect, {
  onChange: magic.description_onChange
})

export default effect
