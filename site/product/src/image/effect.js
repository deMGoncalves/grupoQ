import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (image) {
  useEffect((product) => image[effect.onChange](product), ['product'])
})

Object.assign(effect, {
  onChange: magic.image_onChange
})

export default effect
