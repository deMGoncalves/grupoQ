import { useEffect } from '@grupoq/global'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const effect = middleware(function (bag) {
  useEffect((product) => bag[effect.onChange](product), ['product'])
})

Object.assign(effect, {
  onChange: magic.bag_onChange
})

export default effect
