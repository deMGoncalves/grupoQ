import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (title) {
  useEffect((product) => title[effect.onChange](product), ['product'])
})

Object.assign(effect, {
  onChange: magic.title_onChange
})

export default effect
