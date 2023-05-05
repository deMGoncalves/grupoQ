import * as f from '@grupoq/f'
import h from '@grupoq/h'

export default {
  get: (_target, key) =>
    (strings, ...expressions) =>
      (props, children) => {
        const values = expressions.map((e) => e?.(props))
        const style = f.zip(strings, values).flat(Infinity).join('').replace(/[\n ]+/g, ' ').trim()
        return h(key, { style, ...props }, ...children)
      }
}
