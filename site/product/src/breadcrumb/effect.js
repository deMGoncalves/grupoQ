import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (breadcrumb) {
  useEffect((product) => breadcrumb[effect.onChange](product), ['product'])
})

Object.assign(effect, {
  onChange: magic.breadcrumb_onChange
})

export default effect
